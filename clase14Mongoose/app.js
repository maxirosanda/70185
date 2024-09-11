import express from 'express'
import usersRoutes from './src/routes/usersRoutes.js'
import alumnosRoutes from './src/routes/alumnosRoutes.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersRoutes)
app.use('/api/alumnos',alumnosRoutes)

mongoose.connect('mongodb+srv://rosandamaximiliano:aA123456@cluster0.pgr7r.mongodb.net/colegio?retryWrites=true&w=majority&appName=Cluster0')
app.listen(8080,()=> console.log("server in port 8080"))