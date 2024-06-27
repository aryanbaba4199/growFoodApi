const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
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
  address: {
    type: {
       address : {
            required: true,
            type: String,
       }, 
      city: {
        required: true,
        type: String,
        
      },
      state: {
        required: true,
        type: String,
        
      },
      zip: {
        required: true,
        type: String,
        
      },
      
    },
    required: true,
  },
  
});

const User = mongoose.model('User', authSchema);

module.exports = User;
