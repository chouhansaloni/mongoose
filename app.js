import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import bodyparser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/user', userRoutes);
mongoose.connect('mongodb://localhost:27017/1stdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(3001, () => {
  console.log(`Server running`);
});
