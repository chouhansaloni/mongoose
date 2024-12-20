import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

      title: {type: String},
      description:{type: String} ,
      category: {type: String},
      price: {type: Number},
});

const Product = mongoose.model('product', productSchema);

export default Product;


