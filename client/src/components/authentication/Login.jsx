import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()

    const submitHandler = async() => {
        try {
            setLoading(true);
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };
            const { data } = await axios.post('http://localhost:8000/user/login', {
                email,
                password
            }, config);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate('/dashboard')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box>
            <VStack>
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
                        placeholder='Enter Your password' 
                        onChange={(e)=>setPassword(e.target.value)} 
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
                    Login
                </Button>
            </VStack>
        </Box>
    )
};


export default Login