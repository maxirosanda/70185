import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firt_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    edad:Number,
    email:{
        type:String,
        unique:true,
        required:true
    }

})

export default mongoose.model("User",UserSchema)