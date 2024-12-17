import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String,
     },
  lastname: { 
    type: String, 
   },
  email: {
     type: String, 
     unique: true, 
     },
  age: { 
    type: Number 
  },
});

const User = mongoose.model('User', userSchema);

export default User;