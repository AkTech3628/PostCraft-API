const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// REGISTER
const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    res.status(201).json({
        message: "User registered successfully",
        user
    })
}

// LOGIN
const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        return res.json({ message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.json({ message: "Invalid password" })
    }

    const token = jwt.sign(
        { id: user._id },
        "SECRET_KEY",
        { expiresIn: '1d' }
    )

    res.json({
        message: "Login successfully",
        token
    })
}

module.exports = { registerUser, loginUser }
