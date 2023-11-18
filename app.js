const express = require('express');
const eventRouter = require('./routes/event');
const discountRouter = require('./routes/discount');
const { specs, swaggerUi } = require('./swagger');
const app = express();

// Middleware untuk memungkinkan Express membaca JSON dari body permintaan
app.use(express.json());

// Routing
app.use('/api', eventRouter); // Ganti '/api' sesuai dengan path yang Anda inginkan
app.use('/api', discountRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Handling other routes
// ... tambahkan routing lainnya

const PORT = process.env.PORT || 3000;

// Handling errors during server startup
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
