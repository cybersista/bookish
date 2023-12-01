const pool = require('../config/config.json')['development'];
const { User } = require('../models');
const { tokenSign } = require('../helpers/jwt');

// Register Admin
const registerMember = async (req, res, next) => {
  try {
    const { email, password, levelUser } = req.body;

    if (levelUser !== 'admin' && levelUser !== 'member') {
      return res.status(400).json({ status: 400, message: 'Incomplete data. Please provide all required fields.' });
    }

    if (levelUser !== 'member') {
      return res.status(400).json({status: 400, message: 'Invalid levelUser for member registration.' });
    }

    const newUser = await User.create({
      email,
      password,
      levelUser,
    });

    const memberId = newUser.id;
    const token = tokenSign({ userId: memberId, isMember: true });

    res.status(201).json({status: 201, message: 'Registration successful', token });
  } catch (error) {
    next(error);
  }
};

// Login
const loginMember = async (req, res, next) => {
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
      const isMember = result.levelUser === 'member';
      const token = tokenSign({ userId, isMember });
      res.status(200).json({ status:200, message:'Login successful', token });
    } else {
      res.status(401).json({ status:401, message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Admins (only accessible by admin)
const getAllMembers = async (req, res, next) => {
  try {
    const result = await User.findAll({
      where: {
        levelUser: 'member',
      },
    });

    res.status(200).json({status:200, message:'Success Get Members', data:result});
  } catch (error) {
    next(error);
  }
};

// Get Admin by ID (only accessible by admin)
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
      res.status(200).json({status: 200, message: `Success Get Admin With Id: ${memberId}`, data: result});
    } else {
      res.status(404).json({ status:404, message: 'Admin not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerMember,
  loginMember,
  getAllMembers,
  getMemberById,
};