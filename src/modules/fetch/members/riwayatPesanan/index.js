
import { instance } from '../../../axios/index';


async function getAllRiwayatPesanan() {
  try {
    const response = await instance.get('riwayat-pesanan/members');
    console.log('Response from getAllRiwayatPesanan:', response.data);
    return response && response.data ? response.data : [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

async function getRiwayatPesananById(id) {
  try {
    const response = await instance.get(`riwayat-pesanan/members/${id}`);
    return response && response.data ? response.data : null;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

export { getAllRiwayatPesanan, getRiwayatPesananById };