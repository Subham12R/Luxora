const express = require('express');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

//@route POST /api/users/register
//@desc Register a new user
//@access Public
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });
        
        user = new User({ name, email, password });
        await user.save();
        
        const payload = { user: { id: user._id, role: user.role } };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err,token) => {
            if (err) return res.status(500).json({ message: "Server Error" });
            return res.status(201).json({ message: 'User registered successfully', token });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

//@route POST /api/users/login
//@desc Login a user
//@access Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user) return res.status(400).json({ message: "Invalid Credentials" });
        const isMatch = await user.comparePassword(password);

        if(!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const payload = { user: { id: user._id, role: user.role } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err,token) => {
            if (err) return res.status(500).json({ message: "Server Error" });
            return res.status(200).json({ message: 'Login successful', token });
        });
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @route GET /api/users/profile
// @desc Get user profile (Protected Route)
// @access Private

router.get('/profile', protect, async (req, res) => {
    res.json(req.user);
});

module.exports = router;