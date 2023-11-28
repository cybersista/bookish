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

module.exports = {
    getAll
}