const { detailUser, User, userPayment } = require('../models');
const { tokenVerifier } = require('../helpers/jwt');

const getAll = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = tokenVerifier(token);
  const id = decodedToken.userId
    try {
        const result = await detailUser.findAll({
            include: [{
                model : User,
                as : 'users',
                attributes : ['email','password'],
                where : {
                    id : id
                }
            },
            {
                model : userPayment,
                as : 'userPayments',
                attributes : ['provider', 'noPayment']
            }
        ]
        });
        res.status(200).json({status:200, message:'Success Get All detailUser', data:result});
    } catch (error) {
        next(error);
    }
};

const updatedetailUser = async (req, res, next) =>{
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = tokenVerifier(token);
    const id = decodedToken.userId
    const { email,password, nama, alamat, kodePos, telepon } = req.body
    const updatedAt = new Date()

    try {
        const detailUserToUpdate = detailUser.findOne({ where: { userId: id } });
        if (!detailUserToUpdate) {
            return res.status(404).json({ status: 404, error: 'Users not found' });
        }
        console.log(detailUserToUpdate.id)
        await User.update({ 
            email : email, 
            password: password, 
            updatedAt : updatedAt 
            },{ where: { id: id}})
        detailUser.update({
            nama: nama, 
            alamat : alamat, 
            kodePos : kodePos, 
            telepon: telepon, 
            updatedAt: updatedAt
        }, { where: { userId: id}})
        
        const result = await detailUser.findAll({
            include: [{
                model : User,
                as : 'users',
                attributes : ['email','password'],
                where : {
                    id : id
                }
            }
        ]});
        res.json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    updatedetailUser
}