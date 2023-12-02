const {Buku, fileBuku, Penulis, Penerbit, Kategori} = require('../models')

const getAll = async (req, res, next) =>{
    
}
const detailBuku = async (req, res, next) => {
    const { id } = req.params;
    try {
      const bukuById = await Buku.findByPk(id, {
        attributes : ['id','judul','harga','isbn','tahunTerbit'],
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
    });
      if (!bukuById) {
        return res.status(404).json({ status: 404, error: 'Buku not found' });
      }
      res.json(bukuById);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }
  };


module.exports = {
    detailBuku
}