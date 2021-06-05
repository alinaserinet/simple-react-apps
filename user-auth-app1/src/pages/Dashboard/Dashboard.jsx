import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import BoxBorder from '../../components/BoxBorder';
import PageTitle from '../../components/PageTitle';
import { useAuthDispatch } from '../../context/auth-context';
import UserInfo from './UserInfo';
import { logout } from '../Login/dispatches';
import { useAlertsState } from '../../context/alert-context';

const Dashboard = () => {
    const dispatch = useAuthDispatch();
    const { showAlert } = useAlertsState();

    function handleLogout() {
        localStorage.removeItem('token');
        dispatch(logout());
        showAlert({message: "logout success", status: "success"});
    }

    return (
        <BoxBorder>
            <Box>
                <PageTitle>Dashboard</PageTitle>
                <UserInfo />
                <Button
                    mt={4}
                    colorScheme="red"
                    onClick={handleLogout}>Logout</Button>
            </Box>
        </BoxBorder>
    );
};

export default Dashboard;