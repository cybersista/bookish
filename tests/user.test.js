const { registerAdmin, registerMember, login, getAllAdmins, getAdminById, getAllMembers, getMemberById } = require('../controllers/user');
const { sequelize, User } = require('../models');
const pool = require('../config/dbConfig');

jest.mock('../config/dbConfig');

describe('User Controller Tests', () => {
  beforeAll(async () => {
    try {
      await sequelize.authenticate();
      await sequelize.query('CREATE TABLE IF NOT EXISTS "Users" (id SERIAL PRIMARY KEY, email VARCHAR(255), password VARCHAR(255), levelUser VARCHAR(255));');
    } catch (error) {
      console.error('Unable to connect to the database or create table:', error);
    }
  }, 60000);

  afterAll(async () => {
    try {
      await sequelize.query('DROP TABLE IF EXISTS "Users";');
      await sequelize.close();
    } catch (error) {
      console.error('Error dropping table or closing the database connection:', error);
    }
  }, 60000);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Register Admin', async () => {
    User.create = jest.fn().mockResolvedValue({ id: 1 });

    const req = { body: { email: 'test@example.com', password: 'password', levelUser: 'admin' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await registerAdmin(req, res);

    expect(User.create).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
      levelUser: 'admin',
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ token: expect.any(String) });

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 60000);

  test('Register Member', async () => {
    User.create = jest.fn().mockResolvedValue({ id: 2 });

    const req = { body: { email: 'member@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await registerMember(req, res);

    expect(User.create).toHaveBeenCalledWith({
      email: 'member@example.com',
      password: 'password',
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ token: expect.any(String) });

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 60000);

  test('Login User (Admin or Member)', async () => {
    User.findOne = jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com' });

    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await login(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: { email: 'test@example.com', password: 'password' },
    });
    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      token: expect.any(String),
    });

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 60000);

  test('Get All Admins', async () => {
    User.findAll = jest.fn().mockResolvedValue([{ id: 1, email: 'admin@example.com' }]);

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAllAdmins(req, res);

    expect(User.findAll).toHaveBeenCalledWith({
      where: { levelUser: 'admin' },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, email: 'admin@example.com' }]);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 30000);

  test('Get Admin by ID', async () => {
    User.findOne = jest.fn().mockResolvedValue({ id: 1, email: 'admin@example.com' });

    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAdminById(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: { id: 1, levelUser: 'admin' },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, email: 'admin@example.com' });

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 60000);

  test('Get All Members (only accessible by admin)', async () => {
    User.findAll = jest.fn().mockResolvedValue([{ id: 2, email: 'member@example.com' }]);

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAllMembers(req, res);

    expect(User.findAll).toHaveBeenCalledWith({
      where: { levelUser: 'member' },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 2, email: 'member@example.com' }]);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 30000);

  test('Get Member by ID (only accessible by admin)', async () => {
    User.findOne = jest.fn().mockResolvedValue({ id: 2, email: 'member@example.com' });

    const req = { params: { id: 2 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getMemberById(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: { id: 2, levelUser: 'member' },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 2, email: 'member@example.com' });

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  }, 60000);
});
