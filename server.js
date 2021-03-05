if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// Set The Template Engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(expressLayouts)

app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.json())

// ROUTERS 
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const categoriesRouter = require('./routes/categories')

// Setup Database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => console.log(`Connecting To ${process.env.DATABASE_URL} DB `))

// Handel Routers
//app.use('/', (req, res) => res.send('Root Route'))
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)
app.use('*', (req, res) => res.send('There\'s No Route'))

app.listen(process.env.PORT || 3000, () => console.log(`Server Running...`))