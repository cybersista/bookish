const express            = require('express')
const { authentication } = require('../middlewares/auth')
const bukuController     = require('../controllers/buku')
const router             = express.Router()

router.get('/:id', authentication, bukuController.detailBuku)

module.exports = router