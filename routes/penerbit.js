const express            = require('express')
const {penerbitController}= require('../controllers')
const router             = express.Router()
const { authentication, verifyRole } = require('../middlewares/auth');
const roleList           = require('../config/role')

/**
 * @swagger
 * tags:
 *   name: Penerbit
 *   description: Manajemen Penerbit
 */

/**
 * @swagger
 * /penerbit:
 *   get:
 *     summary: Mendapatkan semua penerbit
 *     tags: [Penerbit]
 *     responses:
 *       200:
 *         description: Sukses
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/', authentication, verifyRole(roleList.Admin), penerbitController.getAllPenerbit);

/**
 * @swagger
 * /penerbit/{id}:
 *   get:
 *     summary: Mendapatkan penerbit berdasarkan ID
 *     tags: [Penerbit]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penerbit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sukses
 *       404:
 *         description: Penerbit tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/:id', authentication, verifyRole(roleList.Admin), penerbitController.getPenerbitById);

/**
 * @swagger
 * /penerbit:
 *   post:
 *     summary: Menambahkan penerbit baru (hanya admin)
 *     tags: [Penerbit]
 *     security:
 *       - MyAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *     responses:
 *       201:
 *         description: Penerbit berhasil ditambahkan
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.post('/add', authentication, verifyRole(roleList.Admin),  penerbitController.createPenerbit);

/**
 * @swagger
 * /penerbit/{id}:
 *   put:
 *     summary: Mengedit penerbit berdasarkan ID (hanya admin)
 *     tags: [Penerbit]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penerbit
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
 *         description: Penerbit berhasil diperbarui
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Penerbit tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.put('/edit/:id', authentication, verifyRole(roleList.Admin),  penerbitController.updatePenerbit);

/**
 * @swagger
 * /penerbit/{id}:
 *   delete:
 *     summary: Menghapus penerbit berdasarkan ID (hanya admin)
 *     tags: [Penerbit]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Penerbit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Penerbit berhasil dihapus
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Penerbit tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.delete('/delete/:id', authentication, verifyRole(roleList.Admin),  penerbitController.deletePenerbit);

module.exports = router