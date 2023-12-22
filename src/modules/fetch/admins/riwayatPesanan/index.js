
import { instance } from '../../../axios/index';

async function getAllRiwayatPesanan() {
  try {
    const response = await instance.get('riwayat-pesanan/admin');
    console.log('Response from getAllRiwayatPesanan:', response.data);
    return response && response.data ? response.data : [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

async function getRiwayatPesananById(id) {
  try {
    const response = await instance.get(`riwayat-pesanan/admin/${id}`);
    return response && response.data ? response.data : null;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

async function updateStatusPesanan(id, statusPesanan) {
  try {
    const response = await instance.put(`riwayat-pesanan/admin/${id}`, {
      statusPesanan: statusPesanan,
    });

    console.log('Response from updateStatusPesanan:', response.data);
    return response && response.data ? response.data : null;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}


export { getAllRiwayatPesanan, getRiwayatPesananById, updateStatusPesanan};