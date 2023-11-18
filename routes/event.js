// routes/event.js
const express = require('express');
const router = express.Router();
const { Event, Point } = require('../models');

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve a list of all events
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Events retrieved successfully
 */

// Endpoint untuk Menampilkan Semua Event
router.get('/api/event', async (req, res) => {
  try {
    const event = await Event.findAll({ 
      include: [{ model: Point, as: 'eventPoints' }],
    });
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint untuk Mendapatkan Poin Anggota
router.get('/api/point/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const point = await Point.findAll({ where: { userId } });
    res.status(200).json(point);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
