import { instance } from '../../../axios/index';

const getAllPenulis = async () => {
  try {
    const response = await instance.get(`/penulis`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
  
  export { getAllPenulis };