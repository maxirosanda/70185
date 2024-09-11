import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import productsRoutes from './src/routes/productsRoutes.js'
import cartRoutes from './src/routes/cartsRoutes.js'
import ordersRoutes from './src/routes/ordersRouters.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static',express.static(__dirname + '/public'))

app.use('/api/products',productsRoutes)
app.use('/api/carts',cartRoutes)
app.use('/api/orders',ordersRoutes)

app.listen(8080,()=> console.log("servidor en puerto 8080"))