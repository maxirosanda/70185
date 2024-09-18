import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './dirname.js'
import ordersRoutes from './src/routes/ordersRoutes.js'
import studentsRoutes from './src/routes/studentsRoutes.js'
import viewsRoutes from './src/routes/viewsRoutes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/static',express.static(__dirname + '/public'))
app.engine('hbs',handlebars.engine({
    extname:'.hbs',
    runtimeOptions:{allowProtoPropertiesByDefault:true}
}))
app.set('view engine','hbs')
app.set('views',__dirname + '/src/views')

app.use('/api/orders',ordersRoutes)
app.use('/api/students',studentsRoutes)
app.use('/',viewsRoutes)

mongoose.connect('mongodb+srv://rosandamaximiliano:aA123456@cluster0.iwrap.mongodb.net/clase17?retryWrites=true&w=majority&appName=Cluster0')
app.listen(8080,()=> console.log("server in port 8080"))