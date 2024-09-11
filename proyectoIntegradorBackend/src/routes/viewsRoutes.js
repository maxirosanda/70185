import { Router } from "express"
import Product from "../models/Product.js"

const router = Router()

router.get('/',async (req,res)=>{
    try {
        const products = await Product.find({})
        res.render('index',{products})
    } catch (error) {
        res.json(error)
    }
})

router.get('/create-product',async (req,res)=>{
        res.render('create-product')
})

export default router