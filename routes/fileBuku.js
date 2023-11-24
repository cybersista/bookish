const express = require('express');
const router = express.Router();
const { addFileBuku, getAllFileBuku, updateFileBuku, deleteFileBuku, getFileBukuById } = require('../controllers/fileBuku');
const { authentication } = require('../middlewares/auth');
const upload = require('../middlewares/multer');

/**
 * @swagger
 * tags:
 *   name: fileBuku
 *   description: Manajemen File Buku
 */

/**
 * @swagger
 * /fileBuku:
 *   post:
 *     summary: Add a file to a book (admin only)
 *     tags: [fileBuku]
 *     security:
 *       - MyAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               bukuId:
 *                 type: integer
 *               urlFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File added to book successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.post('/', upload.single('urlFile'), authentication, addFileBuku);
// router.post('/', upload.single('urlFile'), (req, res) => {
//     console.log(req.file);
//     res.send("file uploaded successfully");
// });

/**
 * @swagger
 * /fileBuku:
 *   get:
 *     summary: Get all files
 *     tags: [fileBuku]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.get('/', getAllFileBuku);

/**
 * @swagger
 * /fileBuku/{id}:
 *   get:
 *     summary: Get a file by ID
 *     tags: [fileBuku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: File ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: File not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/:id', getFileBukuById);

/**
 * @swagger
 * /fileBuku/{id}:
 *   put:
 *     summary: Update a file by ID (admin only)
 *     tags: [fileBuku]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: File ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               bukuId:
 *                 type: integer
 *               urlFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File updated successfully
 *       404:
 *         description: File not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id',upload.single('urlFile'), authentication, updateFileBuku);

/**
 * @swagger
 * /fileBuku/{id}:
 *   delete:
 *     summary: Delete a file by ID (admin only)
 *     tags: [fileBuku]
 *     security:
 *       - MyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: File ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: File deleted successfully
 *       404:
 *         description: File not found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:id', authentication, deleteFileBuku);

module.exports = router;
