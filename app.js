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

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.9',
    info: {
      title: 'API Bookish',
      version: '1.0.0',
      description: 'Informasi API dari Bookish - Mini Book E-commerce',
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
  apis: ['./docs/docs.js'],
};
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
