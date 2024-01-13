import mongoose from 'mongoose';

// Brand model
const BrandSchema = new mongoose.Schema({
    
    has_image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'image',
    }
  
});

const BrandModel = model('Brand', BrandSchema);
export default BrandModel