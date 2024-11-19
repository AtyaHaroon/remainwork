const Role = require('../Models/Role');  // Adjust the path to where your Role model is located

// CREATE: Add a new role
async function createRole(req, res) {
  try {
    const { RoleName, Status } = req.body;

    // Create a new role document
    const newRole = new Role({
      RoleName,
      Status
    });

    // Save to the database
    const savedRole = await newRole.save();
    res.status(201).json(savedRole);  // Respond with the created role
  } catch (error) {
    console.error('Error creating role:', error);
    res.status(500).json({ message: 'Error creating role', error: error.message });
  }
}

// READ: Get all roles
async function getAllRoles(req, res) {
  try {
    const roles = await Role.find();  // Find all roles
    res.status(200).json(roles);  // Return all roles
  } catch (error) {
    console.error('Error fetching roles:', error);
    res.status(500).json({ message: 'Error fetching roles', error: error.message });
  }
}

// READ: Get a specific role by ID
async function getRoleById(req, res) {
  try {
    const { id } = req.params;  // Get the ID from the URL parameters
    const role = await Role.findById(id);  // Find the role by its ID

    if (!role) {
      return res.status(404).json({ message: 'Role not found' });  // Role not found
    }

    res.status(200).json(role);  // Return the found role
  } catch (error) {
    console.error('Error fetching role:', error);
    res.status(500).json({ message: 'Error fetching role', error: error.message });
  }
}

// UPDATE: Update a role by ID
async function updateRole(req, res) {
  try {
    const { id } = req.params;  // Get the ID from the URL parameters
    const updatedData = req.body;  // Get the updated data from the request body

    // Update the role in the database
    const updatedRole = await Role.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });  // If no role was found to update
    }

    res.status(200).json(updatedRole);  // Return the updated role
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ message: 'Error updating role', error: error.message });
  }
}

// DELETE: Delete a role by ID
async function deleteRole(req, res) {
  try {
    const { id } = req.params;  // Get the ID from the URL parameters

    // Delete the role from the database
    const deletedRole = await Role.findByIdAndDelete(id);

    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });  // If no role was found to delete
    }

    res.status(200).json({ message: 'Role deleted successfully', deletedRole });  // Return success message
  } catch (error) {
    console.error('Error deleting role:', error);
    res.status(500).json({ message: 'Error deleting role', error: error.message });
  }
}

// Export all the controller functions
module.exports = {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole
};
