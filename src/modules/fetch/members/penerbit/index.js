import { instance } from '../../../axios/index';

const getAllPenerbit = async () => {
  try {
    const response = await instance.get(`/penerbit`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
  
  export { getAllPenerbit };