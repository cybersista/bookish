import { instance } from '../../../axios/index';

const registerAdmin = async (userData) => {
  try {
    const response = await instance.post('/user/admins/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// const registerMember = async (userData) => {
//   try {
//     const response = await instance.post('/user/members/register', userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

const login = async (email, password) => {
  try {
    const response = await instance.post('/user/login', { email, password });
    console.log("Login Response:", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export {registerAdmin, login };
