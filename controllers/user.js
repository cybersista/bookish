const { User, detailUser } = require('../models');

// Get All Admins (only accessible by admin)
const getAll = async (req, res, next) => {
  try {
    const result = await User.findAll();

    res.status(200).json({status:200, message:'Success Get All User', data:result});
  } catch (error) {
    next(error);
  }
};

// Get Admin by ID (only accessible by admin)
const getUserById = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const result = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (result) {
      res.status(200).json({status:200, message:`Success Get User With Id: ${userId}`, data:result});
    } else {
      res.status(403).json({ status: 403, message: 'Unauthorized access! Admin access required.' });
    }
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res) => {
  const { email, password, levelUser } = req.body;
  try {
    const newUser = await User.create({ email, password, levelUser })
    if (levelUser == 'member') {
      const userId = newUser.id
      detailUser.create({userId})
    }
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  const updatedAt = new Date()
  try {
    const UsersToUpdate = await User.findByPk(id);
    if (!UsersToUpdate) {
      return res.status(404).json({ status: 404, error: 'Users not found' });
    }
    await UsersToUpdate.update({ email, password, updatedAt });
    res.json(UsersToUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      return res.status(404).json({ status: 404, error: 'User not found' });
    }
    await userToDelete.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};
module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
