import { Router } from "express"
import UserModel from "../models/User.model.js"

const router = Router()

router.get('/',async (req,res)=>{
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const users = await UserModel.findById(id)
        res.status(200).json(users)
    } catch (error) {
        res.json(error)
    }
})

router.post('/',async (req,res)=>{
    try {
        const body = req.body
        if(!body.firt_name || !body.last_name || !body.email){
            return res.json({message:"datos incompletos"})
        }
        await UserModel.create(body)
        res.status(200).json({message:"user created"})
    } catch (error) {
        res.json(error)
    }
})

router.patch('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const body = req.body
        await UserModel.updateOne({_id:id},body)
        res.status(200).json({message:"user updated"})
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        await UserModel.deleteOne({_id:id})
        res.status(200).json({message:"user deleted"})
    } catch (error) {
        res.json(error)
    }
})


export default router