import { instance } from '../../../axios'; 

// Get all stocks
const getAllStocks = async () => {
  try {
    const response = await instance.get('/stok/buku');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

// Add stock for a book
const addStock = async (formData) => {
  try {
    const response = await instance.post('/stok/buku', formData );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

// Update stock for a book
const updateStock = async (gudangId, formData) => {
  try {
    const response = await instance.put(`/stok/buku/${gudangId}`,formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

// Delete stock for a book
const deleteStock = async (id) => {
  try {
    await instance.delete(`/stok/buku/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export { getAllStocks, addStock, updateStock, deleteStock };
