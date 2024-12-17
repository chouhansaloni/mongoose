import User from '../models/user.js';

export const createUser = async (req, res) => {
  try {
    const { name, lastname, email, age } = req.body;
    console.log(name, lastname, email, age );
    const newUser = new User({ name,lastname, email,age,});
    await newUser.save();
    res.status(201).json({ message: 'User created successfully'});
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, lastname, email, age } = req.body;
    if (!name || !lastname || !email || !age) {
      return res.status(400).json({ error: 'All fields are required: name, lastname, email, and age.' });
    }
    const user = await User.findOneAndUpdate(
      { name: req.params.name }, 
      { name, lastname, email, age }, 
      { new: true } 
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ name: req.params.name });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
