import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    name:String,
    size:{
        type:String,
        enum:['small','medium','large'],
        default:'medium'
    },
    price:Number,
    quantity:Number,
    date:Date
})

export default mongoose.model('Order',OrderSchema)