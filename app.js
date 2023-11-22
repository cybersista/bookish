require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const route = require('./routes/index')
const errorHandler = require('./middlewares/error-handler')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const appRoutes = require('./routes');

const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
