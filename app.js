const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const route = require('./routes/index');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Riwayat Pesanan',
      version: '1.0.0',
      description: 'Dokumentasi API untuk mengelola riwayat pesanan',
    },
  },
  apis: ['./controllers/riwayatPesanan.js'], 
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs));

// Move these lines up, before your route handler
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// This middleware should come after cors
app.use('/', route);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
