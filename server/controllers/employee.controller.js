const Employee = require('../models/employee.model');

// get all employee
exports.getEmployees = async (req, res) => {
    try {
        const page = parseInt(req.query.page || 1);
        const limit = parseInt(req.query.limit || 10);
        const skip = (page - 1) * limit;

        const employees = await Employee.find().skip(skip).limit(limit).exec();

        res.status(200).json({ employees });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error retrieving employees", error: error.message });
    }
};


// add a employee
exports.addEmployee = async (req, res) => {
    try {
        const {firstname,lastname,email,department,salary} = req.body;

        // Create a new employee using the Employee model
        const newEmployee = new Employee({firstname,lastname,email,department,salary});

        // Save the employee to the database
        await newEmployee.save();

        res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
    } catch (error) {
        res
          .status(500)
          .json({ message: "Error adding employee", error: error.message });
    }
}

