/**
 * @swagger
 * tags:
 * -    name: Account
 *      description : Segala tentang account
 * -    name : Buku
 *      description : Segala tentang buku
 * -    name : Shop
 *      description : Segala tentang shop
 * -    name : Cart
 *      description : Segala tentang chart
 * -    name : Category
 *      description : Segala tentang category
 * -    name : Dashboard
 *      description : Segala tentang dashboard
 * -    name : Point
 *      description : Segala tentang point
 * 
 * paths : 
 *  "/login":
 *   post:
 *     summary: Login user (admin or member)
 *     tags: [Account]
 *     requestBody:
 *      required: true
 *      content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *              $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login berhasil!
 *       401:
 *         description: Email atau password salah!
 *       500:
 *         description: Internal Server Error!
 * 
 * 
 * components:
 *  schemas:
 *      User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         levelUser:
 *           type: string
 *      UserLogin:
 *          type: object
 *          required:
 *          - email
 *          - password
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type : string
 */