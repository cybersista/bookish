const express       = require('express')
const router        = express.Router()
const path          = require('path')

/** Inisialisasi disini router kalian */
const userRoute = require('./user')
const cartRoutes = require('./cartRoutes')

router.get('/', (req,res) => {
    res.render('index',{
        title : 'Index',
        layout : 'layouts/main-layout'
    })
})
router.use('/user', userRoute)
router.use('/routes', cartRoutes)

module.exports = router