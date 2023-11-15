const { tokenVerifier } = require('../helpers/jwt');

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token tidak ditemukan atau tidak valid!' });
  }
  const token = authorization.slice(7); 

  try {
    const decoded = tokenVerifier(token);
    const { isAdmin } = decoded;

    if (!isAdmin) {
      return res.status(403).json({ message: 'Unauthorized access! Admin access required.' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token salah!' });
  }
};

module.exports = {
  authentication,
};
