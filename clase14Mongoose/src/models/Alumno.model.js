import mongoose from "mongoose"

const AlumnoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    dni:{
        type:String,
        required:true
    },
    curso:{
        type:String,
        required:true
    },
    nota:{
        type:Number,
        required:true
    }
})

export default mongoose.model('Alumno',AlumnoSchema)