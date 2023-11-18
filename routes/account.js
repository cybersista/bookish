// Misalnya routes/account.js
const express = require('express');
const router = express.Router();
const { Member } = require('../models');

// Endpoint Menampilkan Informasi Akun
router.get('/account/:userId', async (req, res) => {
  const userId = req.params.userIdId;

  try {
    const member = await Member.findByPk(userId);

    if (member) {
      res.status(200).json(member);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint Mengupdate Informasi Akun
router.put('/account/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { username, email } = req.body;

  try {
    const member = await Member.findByPk(userId);

    if (member) {
      member.username = username || member.username;
      member.email = email || member.email;

      await member.save();

      res.status(200).json({ message: 'Account updated successfully' });
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
