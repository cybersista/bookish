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

app.use(cors());
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'public/views/'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use('/', route)

// app.use(errorHandler);

if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}