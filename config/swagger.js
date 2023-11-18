// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Sales API',
      version: '1.0.0',
      description: 'API Documentation for Book Sales',
    },
  },
  apis: ['./routes/*.js'], // Mengganti path untuk mencakup semua file di dalam folder routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
