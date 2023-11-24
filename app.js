<<<<<<< HEAD
const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userRoutes = require('./routes/user');
const errorHandling = require('./middlewares/errorHandling');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
=======
require('dotenv').config()

const express        = require('express')
const expressLayouts = require('express-ejs-layouts')
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

app.use(cors());
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'public/views/'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.9',
    info: {
<<<<<<< HEAD
      title: 'API E-commerce',
      version: '1.0.0',
      description: 'Informasi API E-commerce',
=======
      title: 'API Admin',
      version: '1.0.0',
      description: 'Informasi API Admin',
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
      servers: ['http://localhost:3000'],
    },
    components: {
      securitySchemes: {
        MyAuth: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/user.js'],
};
<<<<<<< HEAD

// Middleware untuk memproses payload JSON
app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(morgan('common'));
app.use(express.json());

app.use('/user/members', userRoutes);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server running pada port ${PORT}`);
});
=======
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(morgan('common'));

app.use('/', route)

// app.use(errorHandler);

if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}
>>>>>>> 610c98bea290a8e57354ac19b8d2cfe51f2a786d
