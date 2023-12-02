const express       = require('express')
const router        = express.Router()
const path          = require('path')

const riwayatPesananRoute = require('./riwayatPesanan')

router.get('/', (req,res) => {
    res.render('index',{
        title : 'Index',
        layout : 'layouts/main-layout'
    })
})

router.use('/riwayat-pesanan',riwayatPesananRoute) 


module.exports = router