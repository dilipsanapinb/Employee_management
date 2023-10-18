import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';

const Home = () => {
    return (
        <Box>
            <Tabs variant={'solid-rounded'}>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><Login /></TabPanel>
                    <TabPanel><SignUp/></TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
};

export default Home