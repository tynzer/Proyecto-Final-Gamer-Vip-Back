const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/config');

module.exports = (req, res, next) => {
  try {
   if (!req.headers.authorization) return res.status(401).send({error :'token not found!'});
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;   
   if (req.body.userId && req.body.userId !== userId) {
     res.status(401).send("Invalid user ID");
    }  else {
      next();
    }
  } catch(err) {
    res.status(401).send({
      error: err
    });
  }
};