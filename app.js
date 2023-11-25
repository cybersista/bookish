require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
<<<<<<< HEAD
const ejs            = require('ejs')
const route          = require('./routes/index')
const errorHandler   = require('./middlewares/error-handler')
const cors           = require('cors')
const bodyParser     = require('body-parser')
const path           = require('path')
var app              = express()
const port           = process.env.PORT || 3000
const morgan         = require('morgan');
const swaggerJsDoc   = require('swagger-jsdoc');
const swaggerUI      = require('swagger-ui-express');
const cartRoutes = require('./routes/cartRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
=======
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
>>>>>>> 03cbde92009852b7601ee876800c89aff1c6c13f


<<<<<<< HEAD
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Cart API',
      version: '1.0.0',
      description: 'API for managing carts',
    },
    basePath: '/',
  },
  apis: ['./controllers/cartController.js'],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(morgan('common'));

app.use('/', route)

app.use('/api', cartRoutes); 

// app.use(errorHandler);


if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}
=======
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
>>>>>>> 03cbde92009852b7601ee876800c89aff1c6c13f
