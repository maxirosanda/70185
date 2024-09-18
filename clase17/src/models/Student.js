import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const StudentSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    group:String
})

StudentSchema.plugin(mongoosePaginate)

export default mongoose.model('Student',StudentSchema)