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

module.exports = {
  getAllBuku,
  detailBuku,
  getKategoriBuku,
  getPenulisBuku,
  createBuku,
  updateBuku,
  deleteBuku
}