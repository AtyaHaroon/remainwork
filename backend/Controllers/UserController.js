const mongoose = require('mongoose');

// Define the User schema
const User_Model= new mongoose.Schema({
  Name: { 
    type: String, 
    unique: true, 
    required: true 
  },
  Email: { 
    type: String, 
    required: true, 
    unique: true,  // Ensures the email is unique
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please fill a valid email address']  // Regex for email validation
  },
  Password: { 
    type: String, 
    required: true
  },
  Role: { 
    type: mongoose.Schema.Types.ObjectId,  // Assuming you are using ObjectId references for the Role
    ref: 'Role',  // References the Role model
    required: true
  }
});

//


const User = mongoose.model('User', User_Model);

module.exports = User;
