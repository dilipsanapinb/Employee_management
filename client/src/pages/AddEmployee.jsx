import React, { useState } from 'react';
import {
    Box,
    Input,
    Button,
    Select,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };
            await axios.post('http://localhost:8000/employees/add', {
                firstname,
                lastname,
                email,
                department,
                salary
            }, config);
            navigate('/dashboard')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box p={4}>
            
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Department</FormLabel>
                    <Select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="Tech">Tech</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Salary</FormLabel>
                    <Input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </FormControl>
            <Button mt={4} type="submit" colorScheme="blue"
                onClick={handleSubmit}
                >
                    Add Employee
                </Button>
        </Box>
    );
};

export default AddEmployee;
