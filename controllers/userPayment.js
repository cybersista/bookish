const { userPayment, detailUser } = require('../models');
const { tokenVerifier } = require('../helpers/jwt');
// sampe sini belum ygc
const getAll = async (req,res,next) =>{
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = tokenVerifier(token);
  const id = decodedToken.userId
  const detail = await detailUser.findOne({ where: { userId: id } });
    try {
        const result = await userPayment.findAll({where : { detailUserId : detail.id}});
    
        res.status(200).json({status:200, message:'Success Get All User Payment', data:result});
      } catch (error) {
        next(error);
      }
}

const createPayment = async(req,res,next) =>{
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = tokenVerifier(token);
  const id = decodedToken.userId
  const detail = await detailUser.findOne({ where: { userId: id } });
    const {provider, noPayment} = req.body
    try {
        await userPayment.create({ detailUserId: detail.id, provider : provider, noPayment: noPayment });
        const result = await userPayment.findAll({where : { detailUserId : detail.id}});
        res.status(201).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, error: 'Internal Server Error' });
      }
}

const updatePayment = async(req, res, next) =>{
  
  const {id} = req.params
  const {provider, noPayment} = req.body
  const updatedAt = new Date()

  try {
    const userPaymentToUpdate = userPayment.findOne({ where: { id: id } });
    if (!userPaymentToUpdate) {
        return res.status(404).json({ status: 404, error: 'User Payments not found' });
    }
    await userPayment.update({ 
        provider : provider, 
        noPayment: noPayment, 
        updatedAt : updatedAt 
        },{ where: { id: id}})
    
    const result = await userPayment.findAll({
            where : {
                id : id
            }
        });
    res.json(result);
  } catch (error) {
      next(error)
  }
}

const deletePayment = async (req, res, next) =>{
  const { id } = req.params;
  try {
    const userPaymentToDelete = await userPayment.findByPk(id);
    if (!userPaymentToDelete) {
      return res.status(404).json({ status: 404, error: 'User Payments not found' });
    }
    await userPaymentToDelete.destroy();
    res.json({ message: 'User Payments deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

module.exports = {
    getAll,
    createPayment,
    updatePayment,
    deletePayment
}