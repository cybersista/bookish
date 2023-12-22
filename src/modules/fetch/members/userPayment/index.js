// // Import necessary dependencies
// import { instance } from '../../../axios/index';

// // Function to create a payment with FormData
// const createPayment = async (userData, token) => {
//     console.log(userData); 
//     try {
//       const response = await instance.post('/payment', userData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error creating payment:', error);
//       throw error;
//     }
//   };

// // Function to get payments by user ID
// const getPaymentsByUserId = async (detailUserId) => {
//   try {
//     const response = await instance.get(`/payment/user/${detailUserId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error getting payments by user ID:', error);
//     throw error;
//   }
// };

// export { createPayment, getPaymentsByUserId };


import { instance } from '../../../axios/index';

const createPayment = async (formData, token) => {
    try {
      console.log('FormData:', formData);
  
      const response = await instance.post('/payment/buku', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('API Response:', response.data);
  
      // Rest of the code...
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }
  };
  
  
  export { createPayment };