require('dotenv').config()

const express        = require('express')
const route          = require('./routes/index')
const errorHandler   = require('./middlewares/errorHandling')
const upload         = require('./middlewares/multer');
const cors           = require('cors')
const bodyParser     = require('body-parser')
const multer         = require('multer');
const path           = require('path')
const app            = express()
const port           = process.env.PORT || 3000
const morgan         = require('morgan');
const swaggerJsDoc   = require('swagger-jsdoc');
const swaggerUI      = require('swagger-ui-express');
const routes         = require("./routes/index")


const corsOptions = {
  origin: ['http://localhost:3001'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('uploads'));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.9',
    info: {
      title: 'API Dashboard & API Regist-Login Admin',
      version: '1.0.0',
      description: 'Informasi API Admin',
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
  apis: ['./routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', routes, swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(morgan('common'));

app.use('/', route)

if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}/api-docs`)
    })
}
