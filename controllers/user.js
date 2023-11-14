const pool = require('../config/config.json')['development'];
const { User } = require('../models');
const { tokenSign } = require('../helpers/jwt');

// Register Admin
const registerAdmin = async (req, res, next) => {
  try {
    const { email, password, levelUser } = req.body;

    if (levelUser !== 'admin' && levelUser !== 'member') {
      return res.status(400).json({ message: 'Invalid levelUser. Must be admin or member.' });
    }

    const newUser = await User.create({
      email,
      password,
      levelUser,
    });

    const adminId = newUser.id;
    const token = tokenSign({ userId: adminId, isAdmin: true });

    res.status(201).json({ token });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Incomplete data. Please provide all required fields.' });
    }
    next(error);
  }
};

// Login Admin
const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (result) {
      const adminId = result.id;
      const token = tokenSign({ userId: adminId, isAdmin: true });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Admins
const getAllAdmins = async (req, res, next) => {
  try {
    const result = await User.findAll({
      where: {
        levelUser: 'admin',
      },
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Get Admin by ID
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
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Admin tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllAdmins,
  getAdminById,
};