const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        enum: ["Tech", "Marketing", "Operations"],
        required: true,
    },
    salary: {
        type: Number,
        required: true,
        min: 0, // Set a minimum salary value
    },
});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;

