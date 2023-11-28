const express       = require('express')
const router        = express.Router()
const path          = require('path')
const {dashboardController, authController} = require('../controllers')
const { authentication }= require('../middlewares/auth');

/** Inisialisasi disini router kalian */
const accountRoute = require('./user')
const bukuRoute = require('./buku')
const shopRoute = require('./shop')
const categoryRoute = require('./kategori')
const writerRoute = require('./penulis')
const publisherRoute = require('./penerbit')

// route untuk user dan member
router.get('/', dashboardController.dashboardUser)
// router.get('/login')
router.post('/login', authController.login)
// router.get('/register')
router.post('/register', authController.register)
router.post('/logout', authentication, authController.logout);
// router.get('/privacy-policy')
// router.get('/about-us')
// router.get('/event')
router.use('/category', bukuRoute)
router.use('/shop', shopRoute)
router.use('/my-account', accountRoute)

// route untuk admin
router.use('/admin/user', accountRoute)
router.use('/admin/category', categoryRoute)
router.use('/admin/writer', writerRoute)
router.use('/admin/publisher',publisherRoute)
// router.use('/buku')
// router.use('/pesanan')
// router.use('/retur')
// router.use('/event')
module.exports = router