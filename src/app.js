import express from 'express'
import morgan from 'morgan'
const multer = require('multer')
//
const app = express()

import productsRoutes from './routes/products.routes'

// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(upload.none())

app.use('/products', productsRoutes)

export default app
