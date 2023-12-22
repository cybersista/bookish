import { instance } from '../../../axios/index';

const getAllPenerbit = async () => {
  try {
    const response = await instance.get('/penerbit');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const getPenerbitById = async (id) => {
  try {
    const response = await instance.get(`/penerbit/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const createPenerbit = async (nama) => {
  try {
    const response = await instance.post('/penerbit', { nama });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const updatePenerbit = async (id, nama) => {
  try {
    const response = await instance.put(`/penerbit/${id}`, { nama });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

const deletePenerbit = async (id) => {
  try {
    const response = await instance.delete(`/penerbit/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export { getAllPenerbit, getPenerbitById, createPenerbit, updatePenerbit, deletePenerbit };
