import { instance } from "../../../axios/index";

// Mendapatkan semua buku
const getAllBuku = async () => {
  try {
    const response = await instance.get("/buku");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

// Fungsi untuk mendapatkan buku populer
const getBukuPopuler = async () => {
  try {
    const response = await instance.get(`/buku/populer`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

// Fungsi untuk mendapatkan buku rekomendasi
const getBukuTerbaru = async () => {
  try {
    const response = await instance.get(`/buku/recommended`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

// Mendapatkan buku berdasarkan ID
const getBukuById = async (id) => {
  try {
    const response = await instance.get(`/buku/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

// Mendapatkan buku berdasarkan kategori
const getBukuByKategori = async (nama) => {
  try {
    const response = await instance.get(`/buku/kategori/${nama}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export {
  getAllBuku,
  getBukuPopuler,
  getBukuTerbaru,
  getBukuById,
  getBukuByKategori,
};
