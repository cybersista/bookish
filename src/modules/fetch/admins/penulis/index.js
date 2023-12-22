import { instance } from '../../../axios/index';

const getAllPenulis = async () => {
  try {
    const response = await instance.get('/penulis');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const getPenulisById = async (id) => {
  try {
    const response = await instance.get(`/penulis/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const createPenulis = async (nama) => {
  try {
    const response = await instance.post('/penulis', { nama });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const updatePenulis = async (id, nama) => {
  try {
    const response = await instance.put(`/penulis/${id}`, { nama });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const deletePenulis = async (id) => {
  try {
    const response = await instance.delete(`/penulis/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export { getAllPenulis, getPenulisById, createPenulis, updatePenulis, deletePenulis };
