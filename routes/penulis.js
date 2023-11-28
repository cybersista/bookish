const express            = require('express')
const {penulisController}= require('../controllers')
const router             = express.Router()
const { authentication, verifyRole } = require('../middlewares/auth');
const roleList           = require('../config/role')

/**
 * @swagger
 * tags:
 *   name: Penulis
 *   description: Manajemen Penulis
 */

/**
 * @swagger
 * /penulis:
 *   get:
 *     summary: Mendapatkan semua penulis
 *     tags: [Penulis]
 *     responses:
 *       200:
 *         description: Sukses
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/',  authentication, verifyRole(roleList.Admin), penulisController.getAllPenulis);

/**
 * @swagger
 * /penulis/{id}:
 *   get:
 *     summary: Mendapatkan penulis berdasarkan ID
 *     tags: [Penulis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penulis
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sukses
 *       404:
 *         description: Penulis tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/:id',  authentication, verifyRole(roleList.Admin), penulisController.getPenulisById);

/**
 * @swagger
 * /penulis:
 *   post:
 *     summary: Menambahkan penulis baru (hanya admin)
 *     tags: [Penulis]
 *     security:
 *       - MyAuth: []
 *     requestBody:
 *       content:
 *        multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *     responses:
 *       201:
 *         description: Penulis berhasil ditambahkan
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.post('/add',  authentication, verifyRole(roleList.Admin), penulisController.createPenulis);

/**
 * @swagger
 * /penulis/{id}:
 *   put:
 *     summary: Mengedit penulis berdasarkan ID (hanya admin)
 *     tags: [Penulis]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penulis
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *     responses:
 *       200:
 *         description: Penulis berhasil diperbarui
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Penulis tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.put('/edit/:id',  authentication, verifyRole(roleList.Admin), penulisController.updatePenulis);

/**
 * @swagger
 * /penulis/{id}:
 *   delete:
 *     summary: Menghapus penulis berdasarkan ID (hanya admin)
 *     tags: [Penulis]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penulis
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Penulis berhasil dihapus
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Penulis tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.delete('/delete/:id',  authentication, verifyRole(roleList.Admin), penulisController.deletePenulis);

module.exports = router