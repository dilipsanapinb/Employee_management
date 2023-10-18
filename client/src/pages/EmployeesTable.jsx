import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

const EmployeesTable = ({ employees, handleEdit, handleDelete }) => {
    return (
        <Table variant={"striped"} colorScheme='teal'>
            <Thead>
                <Tr>
                    <Th>First Name</Th>
                    <Th>Last Name </Th>
                    <Th>Email</Th>
                    <Th>Department</Th>
                    <Th>Salary</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    employees.map((employee) => (
                        <Tr key={employee._id}>
                            <Td>{employee.firstname }</Td>
                            <Td>{employee.lastname }</Td>
                            <Td>{employee.email }</Td>
                            <Td>{employee.department }</Td>
                            <Td>{employee.salary}</Td>
                            <Td>
                                <Button colorScheme='blue' onClick={()=>handleEdit(employee)}>Edit</Button>
                                <Button colorScheme='red' onClick={()=>handleDelete(employee._id)}>Delete</Button>
                            </Td>
                        </Tr>

                    ))
                }
            </Tbody>
        </Table>
    )
};

export default EmployeesTable