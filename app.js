const express = require('express');
const app = express();

const detailPesananRoute = require('./routes/detailPesanan');
const pesananItemRoute = require('./routes/pesananItem');
const pesananPaymentRoute = require('./routes/pesananPayment');

app.use('/api/detailpesanan', detailPesananRoute);
app.use('/api/detailpesanan', pesananItemRoute);
app.use('/api/detailpesanan', pesananPaymentRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
