import mongoose from 'mongoose';

// SubCategory model
const SubCategorySchema = new mongoose.Schema({
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

const SubCategoryModel = model('SubCategory', SubCategorySchema);
export default SubCategoryModel