const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  shopName : {
    required: true,
    type: 'string',
  },
  name: {
    required: true,
    type: String,
     
  },
  email: {
    required: true,
    type: String,
    unique: true,
    
    lowercase: true, 
  },
  password: {
    required: true,
    type: String,
     
  },
  mobile: {
    required: true,
    type: String,
  },
  image : {
    type: String,
  }
  
  
});

const User = mongoose.model('User', authSchema);

module.exports = User;
