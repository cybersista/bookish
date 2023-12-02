const express       = require('express')
const router        = express.Router()
const path          = require('path')

/** Inisialisasi disini router kalian */
const userRoute = require('./user');
const detailUserRoute = require('./detailUser');
const bukuRoute = require('./Bukus');
const fileBukuRoute = require('./fileBuku');
const kategoriRoute = require('./Kategoris');
const penerbitRoute = require('./Penerbits');
const penulisRoute = require('./Penulis');
const ulasanBukuRoute = require('./ulasanBuku');

router.get('/', (req,res) => {
    res.render('index',{
        title : 'Index',
        layout : 'layouts/main-layout'
    })
})
router.use('/user', userRoute);
// router.use('/my-account', userRoute)
router.use('/detail-user', detailUserRoute);
router.use('/buku', bukuRoute);
router.use('/file-buku', fileBukuRoute);
router.use('/kategori', kategoriRoute);
router.use('/penerbit', penerbitRoute);
router.use('/penulis', penulisRoute);
router.use('/ulasanBuku', ulasanBukuRoute);

module.exports = router