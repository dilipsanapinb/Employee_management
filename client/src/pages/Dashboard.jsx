import { Box, Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeesTable from './EmployeesTable';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/add')
    }

    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        navigate('/')
    }
    useEffect(() => {
        const fetchData = async () => {
            
            const config = {
                headers: {
                    'Content-type':'application/json'
                }
            }
            const { data } = await axios.get('http://localhost:8000/employees/', config);
            setEmployees(data.employees)
        }
        fetchData();
    },[])
    console.log(employees);
    

    const handleEdit = async() => {
        
    }

    const handleDelete = async (employeeId) => {
        try {
            await axios.delete(`http://localhost:8000/employees/${employeeId}`);
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee._id !== employeeId));
        } catch (error) {
            console.error('Error deleting employee', error);
        }
    }

    return (
        <>
        <Button
                colorScheme='blue'
                style={{marginRight:20}}
            onClick={handleAdd}
        >Add Employee</Button>

            <Button
                colorScheme='blue'
                onClick={handleLogout}
            >
            Logout
            </Button>
            <Box>
                <EmployeesTable employees={employees} handleEdit={handleEdit} handleDelete={handleDelete}/>
            </Box>
    </>
    )
};

export default Dashboard