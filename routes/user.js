const express           = require('express');
const router            = express.Router();
const { userController, detailUserController, userPaymentController, authController} = require('../controllers');
const { authentication,verifyRole }= require('../middlewares/auth');
const roleList  = require('../config/role')

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Manajemen Users
 */

/**
 * @swagger
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
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Registrasi Admin berhasil!
 *       400:
 *         description: Invalid data or email already registered
 *       500:
 *         description: Internal Server Error
 */
router.post('/add', authentication, verifyRole(roleList.Admin),userController.createUser);
router.post('/detail/add-payment', authentication, verifyRole(roleList.Member), userPaymentController.createPayment)
/**
 * @swagger
 * /user/members/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Registrasi Member berhasil!
 *       400:
 *         description: Invalid data or email already registered
 *       500:
 *         description: Internal Server Error
 */
// router.post('/members/register', registerMember);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login user (admin or member)
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         multipart/form-data:
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
// router.post('/login', login);

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
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
router.get('/', authentication, verifyRole(roleList.Admin), userController.getAll);
router.get('/detail',  authentication, verifyRole(roleList.Member),detailUserController.getAll);
router.get('/detail/payment',  authentication, verifyRole(roleList.Member),userPaymentController.getAll);
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
 *           multipart/form-data:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal Server Error!
 */
router.get('/:id',  authentication, verifyRole(roleList.Admin), userController.getUserById);
router.put('/edit/:id',  authentication, verifyRole(roleList.Admin), userController.updateUser);
router.put('/detail/edit', authentication, verifyRole(roleList.Member),detailUserController.updatedetailUser);
router.put('/detail/edit-payment/:id', authentication, verifyRole(roleList.Member),userPaymentController.updatePayment);
router.delete('/delete/:id',  authentication, verifyRole(roleList.Admin), userController.deleteUser);
router.delete('/detail/delete-payment/:id', authentication, verifyRole(roleList.Member),userPaymentController.deletePayment);

/**
 * @swagger
 * /user/members:
 *   get:
 *     summary: Get all members (only accessible by admin)
 *     tags: [Users]
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Members berhasil diambil!
 *         content:
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
// router.get('/members', authentication, getAllMembers);

/**
 * @swagger
 * /user/members/{id}:
 *   get:
 *     summary: Get member by ID (only accessible by admin)
 *     tags: [Users]
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
 *          multipart/form-data:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal Server Error!
 */
// router.get('/members/:id', authentication, getMemberById);

/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: Logout user (admin or member)
 *     tags: [Users]
 *     security:
 *       - MyAuth: []
 *     responses:
 *       200:
 *         description: Logout berhasil!
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error!
 */
router.post('/logout', authentication, authController.logout);

module.exports = router;
