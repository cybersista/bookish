const express = require('express');
const router = express.Router();
const { registerMember, loginMember, getAllMembers, getMemberById } = require('../controllers/user');
const { authentication } = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Manajemen Member
 */

/**
 * @swagger
 * /user/members/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Members]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Registrasi Member berhasil!
 *       400:
 *         description: Email telah terdaftar atau ID sudah digunakan
 *       500:
 *         description: Internal Server Error
 */
router.post('/members/register', registerMember);

/**
 * @swagger
 * /user/members/login:
 *   post:
 *     summary: Login member
 *     tags: [Members]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MemberLogin'
 *     responses:
 *       200:
 *         description: Login member berhasil!
 *       401:
 *         description: Email atau password salah!
 *       500:
 *         description: Internal Server Error!
 */
router.post('/members/login', loginMember);

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         levelUser:
 *           type: string
 *           example: member
 *     MemberLogin:
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
 * /user/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Member berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
router.get('/members', authentication, getAllMembers);

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
 * /user/members/{id}:
 *   get:
 *     summary: Get member by ID
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Member ID
 *         schema:
 *           type: integer
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Member berhasil diambil!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Admin"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal Server Error!
 */
router.get('/members/:id', authentication, getMemberById);

module.exports = router;