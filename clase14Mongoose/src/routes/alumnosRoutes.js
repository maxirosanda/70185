import { Router } from "express"
import AlumnoModel from "../models/Alumno.model.js"

const router = Router()

router.post('/',async (req,res)=>{
    try {
        const body = req.body
        const alumno = await AlumnoModel.create(body)
        res.status(200).json({message:"alumno creado"})
    } catch (error) {
        res.json(error)
    }
})

router.patch('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const body = req.body
        await AlumnoModel.updateOne({_id:id},body)
        res.status(200).json({message:"alumno actualizado"})
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        await AlumnoModel.deleteOne({_id:id})
        res.status(200).json({message:"Alumno borrado"})
    } catch (error) {
        res.json(error)
    }
})

export default router