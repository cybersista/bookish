const express       = require('express')
const router        = express.Router()
const path          = require('path')

/** Inisialisasi disini router kalian */
const userRoute = require('./user');
const detailuserRoute = require('./detailuser');

router.get('/', (req,res) => {
    res.render('index',{
        title : 'Index',
        layout : 'layouts/main-layout'
    })
})
router.use('/user', userRoute);
router.use('/detailuser', detailuserRoute);

module.exports = router;