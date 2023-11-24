const { tokenVerifier } = require('../helpers/jwt');

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
<<<<<<< HEAD
    return res.status(401).json({ message: 'Token tidak ditemukan atau tidak valid!' });
  }

  const token = authorization.slice(7);
  console.log('Received token:', token);
  try {
    const decoded = tokenVerifier(token);
=======
    return res.status(401).json({ status:401, message: 'Token tidak ditemukan atau tidak valid!' });
  }
  const token = authorization.slice(7); 

  try {
    const decoded = tokenVerifier(token);
    const { isAdmin } = decoded;

    if (!isAdmin) {
      return res.status(403).json({ status:403, message: 'Unauthorized access! Admin access required.' });
    }

>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res.status(401).json({ message: 'Token salah!' });
=======
    res.status(401).json({ status: 401, message: 'Token salah!' });
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
  }
};

module.exports = {
  authentication,
};
