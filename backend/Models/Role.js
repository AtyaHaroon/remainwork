const mongoose = require('mongoose');

const role_Model= new mongoose.Schema({
  RoleName: { 
    type: String, 
    unique: true, 
    required: true 
  },
  Status: { 
    type: String, 
    enum: ['active', 'inactive'], 
    default: 'active' 
  }
});

// Create the model
const Role = mongoose.model('Role', role_Model);

module.exports = Role;
