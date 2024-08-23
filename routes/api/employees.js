const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const rolesList = require('../../config/rolesList');
const verifyRoles = require('../../middleware/verifyRoles');

// prettier-ignore
router.route('/')
  .get(employeesController.getAllEmployees)
  .post(verifyRoles(rolesList.admin, rolesList.editor), employeesController.createNewEmployee)
  .put(verifyRoles(rolesList.admin, rolesList.editor), employeesController.updateEmployee)
  .delete(verifyRoles(rolesList.admin), employeesController.deleteEmployee);

router.route('/:id').get(employeesController.getEmployee);

module.exports = router;
