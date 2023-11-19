const {Buku, fileBuku, Penulis, Penerbit, Kategori} = require('../models')

function attributesFind(id,attributesArr){
    return Buku.findByPk(id, {
        attributes : attributesArr,
        include : [
            {
                model : fileBuku,
                as : 'fileBukus'
            },
            {
                model : Penulis,
                as : 'penulis'
            },
            {
                model : Penerbit,
                as : 'penerbits'
            },
            {
                model : Kategori,
                as : 'kategoris'
            },
        ],
    })
}
module.exports = {
    attributesFind
}