const { fileBuku } = require('../models');

// Add File to Book
const addFileBuku = async (req, res, next) => {
      try {
          const { bukuId } = req.body;
          const urlFile = req.file.path;

          console.log('Request Body:', req.body);
          console.log('File:', req.file);

          const newFile = await fileBuku.create({
              bukuId,
              urlFile,
          });

          res.status(201).json({ status: 201, message: 'File added to book successfully', data: newFile });
      } catch (error) {
        console.error('Error:', error);
          next(error);
      }
};

// Get all files
const getAllFileBuku = async (req, res, next) => {
  try {
    const files = await fileBuku.findAll();
    res.status(200).json({ status: 200, data: files });
  } catch (error) {
    next(error);
  }
};

// Get file by ID
const getFileBukuById = async (req, res, next) => {
  const fileId = req.params.id;
  try {
    const file = await fileBuku.findByPk(fileId);
    if (file) {
      res.status(200).json({ status: 200, data: file });
    } else {
      res.status(404).json({ status: 404, message: 'File not found' });
    }
  } catch (error) {
    next(error);
  }
};

// Update file by ID
const updateFileBuku = async (req, res, next) => {
  const fileId = req.params.id;
  const { bukuId } = req.body;
  const urlFile = req.file ? req.file.path: null;
  try {
    const [updatedRows] = await fileBuku.update(req.body, {
      where: {
        id: fileId,
        bukuId,
        urlFile
      },
    });

    if (updatedRows) {
      res.status(200).json({ status: 200, message: 'File updated successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'File not found' });
    }
  } catch (error) {
    next(error);
  }
};

// Delete file by ID
const deleteFileBuku = async (req, res, next) => {
  const fileId = req.params.id;
  try {
    const deletedFile = await fileBuku.destroy({
      where: {
        id: fileId,
      },
    });

    if (deletedFile) {
      res.status(200).json({ status: 200, message: 'File deleted successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'File not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
    addFileBuku,
    getAllFileBuku,
    getFileBukuById,
    updateFileBuku,
    deleteFileBuku,
};
