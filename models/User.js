const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {  
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], 
    unique: true,
  },
  password: {  
    type: String,
    required: [true, 'Password is required'],
    minlength: [4, 'Password must be at least 6 characters long'], 
  },
});

const User = mongoose.model('User', userModel);

module.exports = User;
