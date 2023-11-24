const express            = require('express')
const bukuController     = require('../controllers/buku')
const router             = express.Router()

/**
 * @swagger
 * tags:
 *   name: Buku
 *   description: Manajemen Buku
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Buku:
 *       type: object
 *       properties:
 *         penulisId:
 *           type: integer
 *         penerbitId:
 *           type: integer
 *         kategoriId:
 *           type: integer
 *         judul:
 *           type: string
 *         harga:
 *           type: number
 *           format: float
 *         isbn:
 *           type: string
 *           format: char
 *         tahunTerbit:
 *           type: number
 *           format: char
 */

/**
 * @swagger
 * /buku/{id}:
 *   get:
 *     summary: Get Detail Buku by ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Buku ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data Detail Buku Berhasil Ditampilkan!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Buku"
 *       404:
 *         description: Data Detail Buku Tidak Ditemukan
 *       500:
 *         description: Internal Server Error!
 */
router.get('/:id', bukuController.detailBuku)

module.exports = router