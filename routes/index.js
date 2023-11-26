const express       = require('express')
const router        = express.Router()
const path          = require('path')
const {dashboardUser} = require('../controllers/dashboard')
const { register, login} = require('../controllers/user');

/** Inisialisasi disini router kalian */
const userRoute = require('./user')
const bukuRoute = require('./buku')

router.get('/', dashboardUser)
router.post('/login', login)
router.post('/register', login)

router.use('/my-account', userRoute)
router.use('/kategori', bukuRoute)
module.exports = router