const {Buku, fileBuku, Penulis, Penerbit, Kategori} = require('../models')
const { Op } = require('sequelize');
const fs = require('fs');
const { get } = require('http');

const getAllBuku = async (req, res, next) =>{
  try {
    const all = await Buku.findAll({
        attributes: ['id', 'judul', 'harga'],
        include : [{
            model : fileBuku,
            as : 'fileBukus',
            attributes : ['urlFile']
        }],
        group : ['Buku.id'],
        limit : 10
    });
    const kategori = await Kategori.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    const penulis = await Penulis.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    res.status(200).json({ status: 200, message: 'Success', data: [{all : all, kategori: kategori, penulis : penulis}]});
  } catch (err) {
      console.log(err)
  }
}

const getKategoriBuku = async (req, res, next) =>{
  const {nama}  = req.params
  try {
    const kategoriBuku = await Buku.findAll({
        attributes: ['id', 'judul', 'harga'],
        include : [{
            model : fileBuku,
            as : 'fileBukus',
            attributes : ['urlFile']
        },{
          model : Kategori,
          as : 'kategoris',
          attributes : ['nama'],
          where : {
            nama : {
              [Op.iLike] : nama
            }
          }
        }],
        group : ['Buku.id', 'kategoris.id'],
        limit : 10
    });
    const kategori = await Kategori.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    const penulis = await Penulis.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    res.status(200).json({ status: 200, message: 'Success', data: [{all : kategoriBuku, kategori: kategori, penulis : penulis}]});
  } catch (err) {
      console.log(err)
  }
}

const getPenulisBuku = async (req, res, next) =>{
  const { nama }  = req.params
  try {
    const penulisBuku = await Buku.findAll({
        attributes: ['id', 'judul', 'harga'],
        include : [{
            model : fileBuku,
            as : 'fileBukus',
            attributes : ['urlFile']
        },{
          model : Penulis,
          as : 'penulis',
          attributes : ['nama'],
          where : {
            nama : {
              [Op.iLike] : nama
            }
          }
        }],
        group : ['Buku.id', 'penulis.id'],
        limit : 10
    });
    const kategori = await Kategori.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    const penulis = await Penulis.findAll({
      attributes : ['id','nama'],
      order : [['nama', 'ASC']]
    })
    res.status(200).json({ status: 200, message: 'Success', data: [{all : penulisBuku, kategori: kategori, penulis : penulis}]});
  } catch (err) {
      console.log(err)
  }
}

const detailBuku = async (req, res, next) => {
    const { id } = req.params;
    try {
      const bukuById = await Buku.findByPk(id, {
        attributes : ['id','judul','harga','isbn','tahunTerbit'],
        include : [
            {
                model : fileBuku,
                as : 'fileBukus',
                attributes : ['urlFile']
            },
            {
                model : Penulis,
                as : 'penulis',
                attributes : ['nama']
            },
            {
                model : Penerbit,
                as : 'penerbits',
                attributes : ['nama']
            },
            {
                model : Kategori,
                as : 'kategoris',
                attributes : ['nama','deskripsi']
            },
            {
              association: 'ulasanBukus',
              include : ['users','fileUlasanBukus'],
              attributes : ['userId','rating','komentar']
            }
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

const createBuku = async (req, res) => {
  const { penulisId, penerbitId, kategoriId, judul, harga, isbn, tahunTerbit } = req.body;
  const date = new Date()
  try {
    const newBuku = await Buku.create({ 
      penulisId : penulisId, 
      penerbitId : penerbitId, 
      kategoriId : kategoriId, 
      judul : judul, 
      harga: harga, 
      isbn : isbn, 
      tahunTerbit : tahunTerbit,
      createdAt : date
    });
    for (const urlFile of req.files) {
      await fileBuku.create({
        bukuId : newBuku.id,
        urlFile : urlFile.path,
        createdAt : date
      })
    }
    res.status(201).json(newBuku);
  } catch (error) {
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

const updateBuku = async (req,res,next) =>{
  const {id} = req.params
  const { penulisId, penerbitId, kategoriId, judul, harga, isbn, tahunTerbit } = req.body;
  const date = new Date()
  try {
    const BukuToUpdate = await Buku.findByPk(id);
    if (!BukuToUpdate) {
      return res.status(404).json({ status: 404, error: 'Buku not found' });
    }
    await BukuToUpdate.update({ 
      penulisId : penulisId, 
      penerbitId : penerbitId, 
      kategoriId : kategoriId, 
      judul : judul, 
      harga: harga, 
      isbn : isbn, 
      tahunTerbit : tahunTerbit,
      createdAt : date
    });
    
    if (req.files != '') {
      await fileBuku.destroy({
        where : {
          bukuId : BukuToUpdate.id
        }
      })
      for (const urlFile of req.files) {
        await fileBuku.create({
          bukuId : BukuToUpdate.id,
          urlFile : urlFile.path,
          createdAt : date,
          updatedAt : date
        })
      }
    }
    res.status(201).json(BukuToUpdate);
  } catch (error) {
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

const deleteBuku = async (req, res, next) =>{
  const {id} = req.params
  try {
    const BukuToDelete = await Buku.findByPk(id);
    if (!BukuToDelete) {
      return res.status(404).json({ status: 404, error: 'Buku not found' });
    }
    await fileBuku.destroy({
      where : {
        bukuId : id
      }
    })
    await BukuToDelete.destroy()
    res.json({ message: 'Buku deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

// Fungsi untuk mengambil Buku berdasarkan kategori
const getBukuByKategori = async (req, res, next) => {
  try {
    const nama = req.params.nama;

    // Log the category names from the database
    const categoriesFromDatabase = await Kategori.findAll();
    console.log('Categories from Database:', categoriesFromDatabase.map(category => category.nama));

    const booksByCategory = await Buku.findAll({
      include: [
        {
          model: Kategori,
          as: 'kategoris',
          where: {
            nama: nama,
          },
        },
      ],
      logging: console.log, 
    });

    console.log('Books by Category:', booksByCategory);

    if (booksByCategory.length === 0) {
      return res.status(404).json({ status: 404, error: 'Buku not found for the specified category' });
    }

    res.status(200).json({ status: 200, message: 'Success', data: booksByCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal Server Error', error: error.message });
  }
};

//fungsu mendapatkan buku populer berdasarkan rating
const getBukuPopuler = async (req, res) => {
  try {
    // Menggunakan SQL untuk mendapatkan buku populer berdasarkan rating
    const popularBooks = await Buku.findAll({
      include: [
        {
          model: ulasanBuku,
          as: 'ulasanBukus',
          where: sequelize.literal('"ulasanBukus"."rating" IS NOT NULL'), // Hanya ambil buku yang memiliki ulasan (rating tidak null)
        },
      ],
      order: [
        [
          sequelize.literal('(SELECT AVG("ulasanBukus"."rating") FROM "ulasanBukus" WHERE "ulasanBukus"."bukuId" = "Buku"."id")'),
          'DESC',
        ],
      ],
      limit: 30, // Ambil 30 buku terpopuler
    });

    res.status(200).json({ status: 200, message: 'Success', data: popularBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal Server Error', error: error.message });
  }
};

//fungsi mendapatkan buku terbaru
const getBukuTerbaru = async (req, res) => {
  try {
    // Menggunakan SQL untuk mendapatkan buku terbaru berdasarkan tanggal pembuatan
    const latestBooks = await Buku.findAll({
      order: [['createdAt', 'DESC']],
      limit: 30, // Ambil 10 buku terbaru
    });

    res.status(200).json({ status: 200, message: 'Success', data: latestBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal Server Error', error: error.message });
  }
};
module.exports = {
  getAllBuku,
  detailBuku,
  getKategoriBuku,
  getPenulisBuku,
  createBuku,
  updateBuku,
  deleteBuku,
  getBukuByKategori,
  getBukuPopuler,
  getBukuTerbaru
}