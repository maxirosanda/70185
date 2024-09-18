import { Router } from "express"
import Order from "../models/Order.js"

const router = Router()

router.get('/', async (req,res)=>{
    const orders = await Order.find({})
    res.status(200).json(orders)
})

router.get('/quantityOrdersByName/:size', async (req,res)=>{
    const {size} = req.params
    
    const result = await Order.aggregate([
        {
            $match:{size}
        },
        {
            $group:{_id:'$name',totalQuantity:{$sum: '$quantity'}}
        },
        {
            $sort:{totalQuantity:-1}
        },
        {
            $group:{_id:1,quantityByName:{$push:'$$ROOT'}}
        },
        {
            $project:{
                "_id":0,
                quantityByName:'$quantityByName'
            }
        },
        {
            $merge:{
                into:'reports'
            }
        }

    ])
    res.status(200).json(result)
})

export default router