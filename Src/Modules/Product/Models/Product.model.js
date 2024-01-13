import mongoose from 'mongoose';

// Product model
const ProductSchema = new mongoose.Schema({
    title:{
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
    description: {
        type:String,
        minLength:3,
        maxLength:10000,
        required:true,
        trim:true,
    
    },
    Stock: {
        type: String,
        min:0,
        require:true,
    },
    Price:{
        type:Number,
        min:0.1,
        require:true,

    },
    Discounted_Price:{
        type:Number,
        min:0.01,
        require:true,
        validate:{
            validator:function(value)   {return value<=this.Price}
        },
        message:'the discounted price must not exceed the initial price',

    },
    cover_image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'image',
    },
    features:[
        {
            key:String,
            value:String
        },
    ],

});

const ProductModel = model('Product', ProductSchema);
export default ProductModel