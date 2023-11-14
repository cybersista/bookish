const { registerAdmin, loginAdmin, getAllAdmins, getAdminById } = require('../controllers/user');
const { tokenSign } = require('../helpers/jwt');
const { sequelize, User } = require('../models');
const pool = require('../config/dbConfig');

jest.mock('../config/dbConfig');

describe('User Controller Tests', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  }, 60000); 

  afterAll(async () => {
    await sequelize.close();
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

  test('Login Admin', async () => {
    User.findOne = jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com' });
  
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    await loginAdmin(req, res);
  
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
});