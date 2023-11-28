const express               = require('express')
const {kategoriController}  = require('../controllers')
const router                = express.Router()
const { authentication, verifyRole } = require('../middlewares/auth');
const roleList = require('../config/role')

/**
 * @swagger
 * tags:
 *   name: Kategori
 *   description: Manajemen Kategori
 */

/**
 * @swagger
 * /kategori:
 *   get:
 *     summary: Mendapatkan semua kategori(admin only)
 *     tags: [Kategori]
 *     responses:
 *       200:
 *         description: Sukses
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/',  authentication, verifyRole(roleList.Admin), kategoriController.getAllKategoris);

/**
 * @swagger
 * /kategori/{id}:
 *   get:
 *     summary: Mendapatkan kategori berdasarkan ID(admin only)
 *     tags: [Kategori]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Kategori
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sukses
 *       404:
 *         description: Kategori tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/:id',  authentication, verifyRole(roleList.Admin), kategoriController.getKategorisById);

/**
 * @swagger
 * /kategori:
 *   post:
 *     summary: Menambahkan kategori baru (hanya admin)
 *     tags: [Kategori]
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
 *               deskripsi:
 *                 type: string
 *     responses:
 *       201:
 *         description: Kategori berhasil ditambahkan
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.post('/add',  authentication, verifyRole(roleList.Admin), kategoriController.createKategoris);

/**
 * @swagger
 * /kategori/{id}:
 *   put:
 *     summary: Mengedit kategori berdasarkan ID (hanya admin)
 *     tags: [Kategori]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Kategori
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
 *               deskripsi:
 *                 type: string
 *     responses:
 *       200:
 *         description: Kategori berhasil diperbarui
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Kategori tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.put('/edit/:id',  authentication, verifyRole(roleList.Admin), kategoriController.updateKategoris);

/**
 * @swagger
 * /kategori/{id}:
 *   delete:
 *     summary: Menghapus kategori berdasarkan ID (hanya admin)
 *     tags: [Kategori]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Kategori
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Kategori berhasil dihapus
 *       401:
 *         description: Tidak diizinkan
 *       404:
 *         description: Kategori tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.delete('/delete/:id',  authentication, verifyRole(roleList.Admin), kategoriController.deleteKategoris);
module.exports = router