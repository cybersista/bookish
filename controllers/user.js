const { User, detailUser } = require('../models');
const { tokenSign } = require('../helpers/jwt');

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrasi member baru
 *     tags: [Members]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */


const registerMember = async (req, res, next) => {
  try {
    const { email, password, nama, alamat, kodePos, telepon } = req.body;

    // Membuat entri di tabel User
    const user = await User.create({ email, password, levelUser: 'member' });
   
    // Membuat entri di tabel detailUser
    await detailUser.create({ userId: user.id, nama, alamat, kodePos, telepon });

    // Buat token atau response sesuai kebutuhan
    const token = tokenSign({ userId: user.id, email: user.email });
   
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error -' });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await detailUser.findAll();
    res.status(200).json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error --' });
  }
};

module.exports = {
  registerMember,
  getAllMembers,
};
