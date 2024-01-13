import mongoose from 'mongoose';

// Category model
const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:200,
        required:true,
        trim:true,
        unique:true,
    },
    slug:{
    
        type:String,
        minLength:3,
        maxLength:200,
        required:true,
        trim:true,
        unique:true,
    },
    

});

const CategoryModel = model('Category', CategorySchema);
export default CategoryModel