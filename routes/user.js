const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, getAllAdmins, getAdminById } = require('../controllers/user');
const { authentication } = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Manajemen Admin
 */

/**
 * @swagger
 * /user/admins/register:
 *   post:
 *     summary: Registrasi admin baru
 *     tags: [Admins]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Registrasi Admin berhasil!
 *       400:
 *         description: Email telah terdaftar atau ID sudah digunakan
 *       500:
 *         description: Internal Server Error
 */
router.post('/register', registerAdmin);

/**
 * @swagger
 * /user/admins/login:
 *   post:
 *     summary: Login admin
 *     tags: [Admins]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *     responses:
 *       200:
 *         description: Login admin berhasil!
 *       401:
 *         description: Email atau password salah!
 *       500:
 *         description: Internal Server Error!
 */
router.post('/login', loginAdmin);

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         levelUser:
 *           type: string
 *           example: admin
 *     AdminLogin:
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
 * /user/admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Admins]
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Admins berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
router.get('/', authentication, getAllAdmins);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     MyAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /user/admins/{id}:
 *   get:
 *     summary: Get admin by ID
 *     tags: [Admins]
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
 *               $ref: "#/components/schemas/Admin"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal Server Error!
 */
router.get('/:id', authentication, getAdminById);

module.exports = router;