const { detailUser, User } = require('../models');

// Menampilkan detail user berdasarkan ID user
const getUserDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDetails = await detailUser.findOne({
      where: { userId: id },
      include: {
        model: User,
        as: 'users',
        attributes: ['email', 'levelUser'],
      },
    });

    if (!userDetails) {
      return res.status(404).json({ status: 404, error: 'Detail user not found' });
    }

    res.status(200).json({ status: 200, message:'Internal Server Error',  data: userDetails });
  } catch (error) {
    next(error);
  }
};

// Menambahkan atau memperbarui detail user
const createUserDetails = async (req, res, next) => {
  const { userId, nama, alamat, kodePos, telepon } = req.body;
  try {
    const userDetails = await detailUser.create({ userId, nama, alamat, kodePos, telepon });

    if (userDetails) {
      res.status(201).json({ status: 201, message: 'User details created successfully', data: userDetails });
    } else {
      res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }
  } catch (error) {
    next(error);
  }
};


// Mengubah atau memperbarui detail user
const updateUserDetails = async (req, res, next) => {
  const { userId, nama, alamat, kodePos, telepon } = req.body;
  try {
    // Periksa apakah detail user sudah ada
    let userDetails = await detailUser.findOne({ where: { userId: userId } });

    if (!userDetails) {
      // Jika belum ada, buat detail user baru
      userDetails = await detailUser.create({ userId, nama, alamat, kodePos, telepon });
    } else {
      // Jika sudah ada, perbarui detail user
      await userDetails.update({ nama, alamat, kodePos, telepon });
    }

    res.status(200).json({ status: 200, message: 'User details updated successfully', data: userDetails });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Menghapus detail user berdasarkan ID user
const deleteUserDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetails = await detailUser.findOne({ where: { userId: id } });

    if (!userDetails) {
      return res.status(404).json({ status: 404, error: 'Detail user not found' });
    }

    await userDetails.destroy();
    res.status(200).json({ status: 200, message: 'User details deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

module.exports = {
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
  createUserDetails
};

