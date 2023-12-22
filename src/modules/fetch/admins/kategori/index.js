import { instance } from '../../../axios/index';

const getAllKategoris = async () => {
  try {
    const response = await instance.get(`/kategori`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

const createKategoris = async (data) => {
  try {
    const response = await instance.post('/kategori', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to create category');
  }
};

const updateKategoris = async (id, data) => {
  try {
    const response = await instance.put(`/kategori/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to update category');
  }
};

const deleteKategoris = async (id) => {
  try {
    const response = await instance.delete(`/kategori/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to delete category');
  }
};

export { getAllKategoris, createKategoris, updateKategoris, deleteKategoris };