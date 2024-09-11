import { Router } from "express"
import Product from "../models/Product.js"
import { uploader } from "../utils/multer.js"

const router = Router()

router.get('/',async (req,res)=>{
    const products = await Product.find({})
    res.json(products)
})

router.post('/',uploader.single('file'),async (req,res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({ status: "error", error: "No se pudo guardar la imagen" })
        }
    
        const body = req.body
        body.img = req.file.originalname
        await Product.create(body)
        res.json({message:'Product created'})
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id',async (req,res) => {
    try {
        const {id} = req.params
        await Product.deleteOne({_id:id})
        res.status(200).json({message:'product deleted'})
    } catch (error) {
        res.json(error)
    }
})

export default router