const bukuService = require('../services/buku')

const detailBuku = async(req,res,next) => {
    try {
        const buku = await bukuService.simpleGet(req.params.id)
        if (!buku) {
            res.status(404).json({ status:404, message: 'Buku not found' });
        }else{
            res.status(200).json({status:200, message:`Success Get Buku With Id: ${req.params.id}`, data:buku});
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    detailBuku
}