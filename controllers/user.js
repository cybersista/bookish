<<<<<<< HEAD
const { User, detailUser } = require('../models');
const { tokenSign } = require('../helpers/jwt');

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Members]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               nama:
 *                 type: string
 *               alamat:
 *                 type: string
 *               kodePos:
 *                 type: string
 *               telepon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Registrasi member berhasil!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */


const registerMember = async (req, res, next) => {
  try {
    const { email, password, nama, alamat, kodePos, telepon } = req.body;

    // Membuat entri di tabel User
    const user = await User.create({ email, password, levelUser: 'member' });
   
    // Membuat entri di tabel detailUser
    await detailUser.create({ userId: user.id, nama, alamat, kodePos, telepon });

    // Buat token atau response sesuai kebutuhan
    const token = tokenSign({ userId: user.id, email: user.email });
   
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error -' });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await detailUser.findAll();
    res.status(200).json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error --' });
=======
const pool = require('../config/config.json')['development'];
const { User } = require('../models');
const { tokenSign } = require('../helpers/jwt');

// Register Admin
const registerAdmin = async (req, res, next) => {
  try {
    const { email, password, levelUser } = req.body;

    if (!email || !password || !levelUser) {
      return res.status(400).json({ status: 400, message: 'Incomplete data. Please provide all required fields.' });
    }

    if (levelUser !== 'admin') {
      return res.status(400).json({status: 400, message: 'Invalid levelUser for admin registration.' });
    }

    const newUser = await User.create({
      email,
      password,
      levelUser,
    });

    const adminId = newUser.id;
    const token = tokenSign({ userId: adminId, isAdmin: true });

    res.status(201).json({status: 201, message: 'Registration successful', token });
  } catch (error) {
    next(error);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (result) {
      const userId = result.id;
      const isAdmin = result.levelUser === 'admin';
      const token = tokenSign({ userId, isAdmin });
      res.status(200).json({ status:200, message:'Login successful', token });
    } else {
      res.status(401).json({ status:401, message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Admins (only accessible by admin)
const getAllAdmins = async (req, res, next) => {
  try {
    const result = await User.findAll({
      where: {
        levelUser: 'admin',
      },
    });

    res.status(200).json({status:200, message:'Success Get Admins', data:result});
  } catch (error) {
    next(error);
  }
};

// Get Admin by ID (only accessible by admin)
const getAdminById = async (req, res, next) => {
  const adminId = req.params.id;

  try {
    const result = await User.findOne({
      where: {
        id: adminId,
        levelUser: 'admin',
      },
    });

    if (result) {
      res.status(200).json({status:200, message:`Success Get Admin With Id: ${adminId}`, data:result});
    } else {
      res.status(404).json({ status:404, message: 'Admin not found' });
    }
  } catch (error) {
    next(error);
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
  }
};

module.exports = {
<<<<<<< HEAD
  registerMember,
  getAllMembers,
=======
  registerAdmin,
  login,
  getAllAdmins,
  getAdminById,
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
};
