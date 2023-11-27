// authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

const authToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, msg: 'Token non fourni' });
  }

  jwt.verify(token, JWT_KEY, (err, decoded) => {
    if (err) {
        console.error('Erreur de décodage du token :', err)
        return res.status(401).json({ success: false, msg: 'Token invalide' });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authToken;