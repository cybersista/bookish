const jwt = require('jsonwebtoken');

const tokenSign = (data) => {
<<<<<<< HEAD
  const token = jwt.sign(data, process.env.JWT_KEY || 'Bersifat Rahasia', { expiresIn: '1h' });
=======
  const token = jwt.sign(data, process.env.JWT_KEY || 'rahasiabangetini', { expiresIn: '1h' });
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
  return token;
};

const tokenVerifier = (token) => {
<<<<<<< HEAD
  const data = jwt.verify(token, process.env.JWT_KEY || 'Bersifat Rahasia');
=======
  const data = jwt.verify(token, process.env.JWT_KEY || 'rahasiabangetini');
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
  return data;
};

module.exports = { tokenSign, tokenVerifier };