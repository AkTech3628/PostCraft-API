const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, "SECRET_KEY");
    req.userId = decoded.id;

    next();
};

module.exports = authMiddleware;
