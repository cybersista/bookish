const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { registerMember, getAllMembers } = require('../controllers/user');
=======
const { registerAdmin, login, getAllAdmins, getAdminById} = require('../controllers/user');
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
const { authentication } = require('../middlewares/auth');

/**
 * @swagger
 * tags:
<<<<<<< HEAD
 *   name: Members
 *   description: Manajemen Members
=======
 *   name: Users
 *   description: Manajemen Users
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
 */

/**
 * @swagger
<<<<<<< HEAD
 * /users/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Members]
=======
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         levelUser:
 *           type: string
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *   securitySchemes:
 *     MyAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /user/admins/register:
 *   post:
 *     summary: Registrasi admin baru
 *     tags: [Users]
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
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
=======
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Registrasi Admin berhasil!
 *       400:
 *         description: Invalid data or email already registered
 *       500:
 *         description: Internal Server Error
 */
router.post('/admins/register', registerAdmin);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login user (admin or member)
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login berhasil!
 *       401:
 *         description: Email atau password salah!
 *       500:
 *         description: Internal Server Error!
 */
router.post('/login', login);

/**
 * @swagger
 * /user/admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Users]
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Admins berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
router.get('/admins', authentication, getAllAdmins);

/**
 * @swagger
 * /user/admins/{id}:
 *   get:
 *     summary: Get admin by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: integer
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Admin berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal Server Error!
 */
router.get('/admins/:id', authentication, getAdminById);
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d

module.exports = router;
