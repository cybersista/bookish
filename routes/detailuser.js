const express = require('express');
const router = express.Router();
const { getUserDetails,createUserDetails, updateUserDetails, deleteUserDetails } = require('../controllers/detailuser');
const multer = require('multer');

/**
 * @swagger
 * tags:
 *   name: userDetails
 *   description: Manajemen Detail User
 */

/**
 * @swagger
 * /detailuser/{id}:
 *   get:
 *     summary: Mendapatkan detail user berdasarkan ID user
 *     tags: [userDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID User
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sukses
 *       404:
 *         description: Detail user tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.get('/:id', getUserDetails);

/**
 * @swagger
 * /detailuser:
 *   post:
 *     summary: Menambahkan detail user baru
 *     tags: [userDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               nama:
 *                 type: string
 *               alamat:
 *                 type: string
 *               kodePos:
 *                 type: string
 *               telepon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sukses
 *       500:
 *         description: Kesalahan Server Internal
 */
router.post('/', createUserDetails);


/**
 * @swagger
 * /detailuser:
 *   put:
 *     summary: Menambahkan atau memperbarui detail user
 *     tags: [userDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               nama:
 *                 type: string
 *               alamat:
 *                 type: string
 *               kodePos:
 *                 type: string
 *               telepon:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sukses
 *       500:
 *         description: Kesalahan Server Internal
 */
router.put('/', updateUserDetails);

/**
 * @swagger
 * /detailuser/{id}:
 *   delete:
 *     summary: Menghapus detail user berdasarkan ID user
 *     tags: [userDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID User
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sukses
 *       404:
 *         description: Detail user tidak ditemukan
 *       500:
 *         description: Kesalahan Server Internal
 */
router.delete('/:id', deleteUserDetails);

module.exports = router;
