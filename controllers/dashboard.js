const {ulasanBuku, Buku, Kategori, fileBuku, sequelize } = require('../models')
const dashboardUser = async(req, res, next) => {
    try {
        const all = await Buku.findAll({
            attributes: ['id', 'judul', 'harga'],
            include : {
                model : fileBuku,
                as : 'fileBukus',
                attributes : ['urlFile']
            },
            group : ['Buku.id'],
            limit : 10
        });
        const popularBooks = await Buku.findAll({
            attributes: ['id', 'judul', 'harga', [sequelize.fn('AVG', sequelize.col('ulasanBukus.rating')), 'averageRating']],
            include:[
                {
                    model : ulasanBuku,
                    as : 'ulasanBukus',
                    attributes: [],
                },
                {
                    model : fileBuku,
                    as : 'fileBukus',
                    attributes : ['urlFile']
                }
            ],
            group : ['Buku.id', 'ulasanBukus.id', 'fileBukus.id'],
            order : [[sequelize.col('averageRating'), 'DESC']]
        })
        const recommendedbyCategoryBooks = await Kategori.findAll({
            include : {
                model: Buku,
                as : 'bukus',
                separate: true,
                attributes : ['id','judul','harga'],
                order: [
                    ['id', 'DESC']
                ]
              
            }
        })
        res.status(200).json({ status: 200, message: 'Success', data: {all, popularBooks,recommendedbyCategoryBooks }});
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    dashboardUser
}