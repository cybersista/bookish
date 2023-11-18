
const express = require('express');
const router = express.Router();
const { Discount, Point } = require('../models');

// ...

router.post('/redeem-discount/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { pointsToRedeem } = req.body;

  try {
    const userPoints = await Point.sum('amount', { where: { userId } });

    if (userPoints < pointsToRedeem) {
      return res.status(400).json({ message: 'Not enough points to redeem' });
    }

    await Point.create({ userId, amount: -pointsToRedeem });
    await Discount.create({ userId, amount: pointsToRedeem });

    res.status(200).json({ message: 'Discount redeemed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
