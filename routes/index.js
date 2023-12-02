const express       = require('express')
const router        = express.Router()
const path          = require('path')
const {dashboardController, authController} = require('../controllers')
const { authentication }= require('../middlewares/auth');

/** Inisialisasi disini router kalian */
const accountRoute = require('./user')
const bukuRoute = require('./buku')
const shopRoute = require('./shop')
const kategoriRoute = require('./kategori')
const penulisRoute = require('./penulis')
const penerbitRoute = require('./penerbit')

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
router.use('/admin/category', kategoriRoute)
router.use('/admin/writer', penulisRoute)
router.use('/admin/publisher',penerbitRoute)
// router.use('/buku')
// router.use('/pesanan')
// router.use('/retur')
// router.use('/event')
module.exports = router