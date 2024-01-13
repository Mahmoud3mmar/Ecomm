

import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        minLength:3,
       required:true
    
    },
    email:{
        type:String,
        unique:true,
    },
    password: String,
    Email_ver:{
        type:Boolean,
        default:false,
    },
    has_order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order',
    },
    has_cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart',
    },
    Review_Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
});


const UserModel = mongoose.model('User', UserSchema);

export default UserModel