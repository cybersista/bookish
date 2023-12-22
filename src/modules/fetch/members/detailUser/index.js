import { instance } from '../../../axios/index';

// Mendapatkan semua detailUser
const getAllDetailUsers = async () => {
  try {
    const response = await instance.get('/detail-user');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

//Post Detail user
const createDetailUser = async (userData) => {
    try {
      const response = await instance.post('/detail-user/create', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

// Mengupdate detailUser
const updateDetailUser = async (userId, updatedData) => {
    try {
      const response = await instance.put(`/detail-user/${userId}`, updatedData);
      console.log("Update response:", response.data); // Add this line
      return response.data;
    } catch (error) {
      console.error("Update error:", error.response.data); // Add this line
      throw error.response.data;
    }
  };

export { getAllDetailUsers, updateDetailUser, createDetailUser };
