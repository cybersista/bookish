import { instance } from '../../axios/index.js';

const registerAdmin = async (userData) => {
  try {
    const response = await instance.post('/user/admins/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const registerMember = async (userData) => {
  try {
    const response = await instance.post('/user/members/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (email, password) => {
  try {
    const response = await instance.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { registerAdmin, registerMember, login };
