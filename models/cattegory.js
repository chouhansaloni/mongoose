import mongoose from 'mongoose';

const cattegorySchema = new mongoose.Schema({
  slug: { 
    type: String,
     },
  name: { 
    type: String, 
   },
  url: {
     type: String, 
     },
});

const Category = mongoose.model('cattegory', cattegorySchema);

export default Category;


