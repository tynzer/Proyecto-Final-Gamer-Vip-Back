const User = require('../models/User');
const { JWT_SECRET } = require('../configs/config');
const jwt = require('jsonwebtoken');


module.exports = {
    register: async (req, res, next) => {
        const { email, password } = req.body;
        console.log(email)
        console.log(password)
        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }
        const user = new User({ email, password })
        user.save()
            .then(function (savedUser) {
                if (savedUser) {
                    res.status(201).send({ savedUser })
                }
            })
            .catch(function (error) {
                res.status(500).send("internal error, it don´t save")
            })
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email: email });
        if (!foundUser) {
            return res.status(403).send({ error: 'Invalid email or password' });
        }
        const isMatch = await foundUser.isValidPassword(password)
        if (!isMatch) {
            res.status(403).send({ error: 'Invalid email or password' })
        } else {
            const token = jwt.sign(
                { userId: foundUser._id },
                JWT_SECRET,
                { expiresIn: '24h' });
            res.status(200).send({
                userId: foundUser._id,
                token: token
            });
        }
    }
}