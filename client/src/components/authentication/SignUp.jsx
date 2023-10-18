import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async() => {
        setLoading(true);
        try {
            if (password !== confirmPassword) {
                return "Password is not matching"
            }
            const config = {
                headers: {
                    'Content-type': 'application/json'
                },
            };
            // console.log(name,email,password);
            await axios.post('http://127.0.0.1:8000/user/register', {
                name,
                email,
                password
            }, config)
            setLoading(false);
            navigate('/');
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <Box>
            <VStack>
                <FormControl id='name' isRequired>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <Input
                        placeholder='Enter Your Name'
                    onChange={(e)=>setName(e.target.value)}    
                    >
                    </Input>
                </FormControl>
                <FormControl id='email' isRequired>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <Input
                        placeholder='Enter Your Email' 
                        onChange={(e)=>setEmail(e.target.value)}
                    >
                    </Input>
                </FormControl>
                <FormControl id='password' isRequired>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <Input
                        placeholder='Enter Your Password' 
                        onChange={(e)=>setPassword(e.target.value)}
                    >
                    </Input>
                </FormControl>
                <FormControl id='confirm_password' isRequired>
                    <FormLabel>
                        Confirm Password
                    </FormLabel>
                    <Input
                        placeholder='Confirm Your Password' 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    >
                    </Input>
                </FormControl>
                <Button
                    colorScheme='teal'
                    width={'100%'}
                    style={{ marginTop: 15 }}
                    onClick={submitHandler}
                    isLoading={loading}
                >
                    Sign Up
                </Button>
            </VStack>
        </Box>
    )
};

export default SignUp