const pool = require('../config/config.json')['development'];
const { User } = require('../models');
const { tokenSign } = require('../helpers/jwt');

// Register Admin
const registerAdmin = async (req, res, next) => {
  try {
    const { email, password, levelUser } = req.body;

    if (!email || !password || !levelUser) {
      return res.status(400).json({ message: 'Incomplete data. Please provide all required fields.' });
    }

    if (levelUser !== 'admin') {
      return res.status(400).json({ message: 'Invalid levelUser for admin registration.' });
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
    next(error);
  }
};

// Register Member
const registerMember = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Incomplete data. Please provide all required fields.' });
    }

    const newUser = await User.create({
      email,
      password,
    });

    const memberId = newUser.id;
    const token = tokenSign({ userId: memberId, isAdmin: false });

    res.status(201).json({ token });
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
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
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

    res.status(200).json(result);
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
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Members (only accessible by admin)
const getAllMembers = async (req, res, next) => {
  try {
    const result = await User.findAll({
      where: {
        levelUser: 'member',
      },
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Get Member by ID (only accessible by admin)
const getMemberById = async (req, res, next) => {
  const memberId = req.params.id;

  try {
    const result = await User.findOne({
      where: {
        id: memberId,
        levelUser: 'member',
      },
    });

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerAdmin,
  registerMember,
  login,
  getAllAdmins,
  getAdminById,
  getAllMembers,
  getMemberById,
};
