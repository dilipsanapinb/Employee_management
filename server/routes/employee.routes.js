const express = require("express");
const emplyeeRouter = express.Router();
const employeeController = require("../controllers/employee.controller");

// Add an employee
emplyeeRouter.post("/add", employeeController.addEmployee);

// Retrieve a list of employees
emplyeeRouter.get("/", employeeController.getEmployees);

// Update an employee's details
emplyeeRouter.put("/:id", employeeController.updateEmployee);

// Delete an employee
emplyeeRouter.delete("/:id", employeeController.deleteEmployee);

module.exports = emplyeeRouter;
