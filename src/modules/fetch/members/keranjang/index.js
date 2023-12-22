import { instance } from '../../../axios/index';


const URL_API = 'http://localhost:3000'; // Gantilah dengan URL API sebenarnya

const createCart = async (cartData) => {
  try {
    const response = await instance.post(`${URL_API}/create-cart`, cartData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getAllCarts = async () => {
  try {
    const response = await instance.get(`${URL_API}/get-all-carts`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateCart = async (id, updatedData) => {
  try {
    const response = await instance.put(`${URL_API}/update-cart/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteCart = async (id) => {
  try {
    const response = await instance.delete(`${URL_API}/delete-cart/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { createCart, getAllCarts, updateCart, deleteCart };