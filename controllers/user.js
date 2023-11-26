const pool = require('../config/config.json')['development'];
const { User } = require('../models');
const { tokenSign } = require('../helpers/jwt');

// Register
const register = async (req, res, next) => {
  try {
    const { email, password, levelUser } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: 400, message: 'Incomplete data. Please provide all required fields.' });
    }

    const newUser = await User.create({
      email,
      password,
      levelUser,
    });

    const userId = newUser.id;
    if (levelUser == 'admin') {
      const token = tokenSign({ userId: userId, isAdmin: true });
    }else{
      const token = tokenSign({ userId: memberId, isAdmin: false });
    }
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
  }
};

module.exports = {
  register,
  login,
  getAllAdmins,
  getAdminById,
};
