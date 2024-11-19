const express = require("express");
const app = express();
const ConnectDB = require("./Config/database")
require("dotenv").config();


app.use(express.json());

// Import Roles
const { 
    createRole, 
    getAllRoles, 
    getRoleById, 
    updateRole, 
    deleteRole 
  } = require('./Controllers/RolesController');  // Path to the Role Controller
  
  // Route to create a new role
  app.route('/roles').post(createRole);
  
  // Route to get all roles
  app.route('/roles').get( getAllRoles);
  
  // Route to get a role by ID
  app.route('/roles/:id').get(getRoleById);
  
  // Route to update a role by ID
  app.route('/roles/:id').put( updateRole);
  
  // Route to delete a role by ID
  app.route('/roles/:id').delete(deleteRole);

app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`The server is running on port ${process.env.PORT}`)
})