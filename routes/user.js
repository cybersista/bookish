const express = require('express');
const router = express.Router();
const { registerMember, getAllMembers } = require('../controllers/user');
const { authentication } = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Manajemen Members
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Members]
 *     requestBody:
 *       content:
 *         application/json:
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
 *         description: Registrasi member berhasil!
 *       500:
 *         description: Internal Server Error
 */
router.post('/register', registerMember);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Mendapatkan semua members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: Members berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DetailUser'
 *       500:
 *         description: Internal Server Error!
 */
router.get('/', authentication, getAllMembers);

module.exports = router;
