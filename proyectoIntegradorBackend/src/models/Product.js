import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

export default mongoose.model('Product',ProductSchema)