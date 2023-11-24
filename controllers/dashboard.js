const {ulasanBuku, Buku, sequelize } = require('../models')
const dashboardUser = async(req, res, next) => {
    try {
        const all = await Buku.findAll();
        const popularBooks = await Buku.findAll({
            attributes: [
                'id',
                'judul',
                [sequelize.fn('AVG', sequelize.col('ulasanBukus.rating')), 'averageRating'],
            ],
            include: [{
                model: ulasanBuku,
                attributes: [],
                where: { bukuId: sequelize.col('id') },
            }],
            group: ['Buku.id'],
            order: [[sequelize.literal('averageRating'), 'DESC']],
            limit: 5,
        });
        const recommendedBooks = await Buku.findAll({
            attributes: [
                'id',
                'judul',
                [sequelize.fn('AVG', sequelize.col('ulasanBukus.rating')), 'averageRating'],
            ],
            include: [{
                model: ulasanBuku,
                attributes: [],
                where: { bukuId: sequelize.col('id') },
            }],
            group: ['Buku.id'],
            order: [[sequelize.literal('averageRating'), 'DESC']],
            limit: 5,
        });
        
    } catch (err) {
        
    }
}