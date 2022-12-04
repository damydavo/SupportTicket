const express = require('express')
const router = require('router')

const { protect } = require('../middleware/authMiddleware')
const { getNotes } = require('../controllers/noteController')


router.route('/').get(protect, getNotes).post(protect,)