const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

//@desc Register a new user
//@route  /api/users
//@access  public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    //check if user already exists
    const userExits = await User.findOne({ email })
    if (userExits) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        name,
        email,
        password: hashPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid users Details')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //get one user
    const user = await User.findOne({ email })

    //get if user matches the one in database
    if (user && (await bcrypt.compare(password, user.password))) {
        if (user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }

    }
    else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})


//@desc GetCurent user
//@route  /api/users/getMe
//@access  private

const getMe = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
    res.status(200).json(user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}