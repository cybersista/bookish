const express       = require('express')
const router        = express.Router()
const path          = require('path')
const {dashboardController, authController} = require('../controllers')
const { authentication, verifyRole }= require('../middlewares/auth');
const roleList  = require('../config/role')

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
router.use('/admin/user', authentication, verifyRole(roleList.Admin), accountRoute)
router.use('/admin/category', authentication, verifyRole(roleList.Admin), kategoriRoute)
router.use('/admin/writer', authentication, verifyRole(roleList.Admin), penulisRoute)
router.use('/admin/publisher', authentication, verifyRole(roleList.Admin), penerbitRoute)
router.use('/admin/books', authentication, verifyRole(roleList.Admin), bukuRoute)
// router.use('/pesanan')
// router.use('/retur')
// router.use('/event')
module.exports = router