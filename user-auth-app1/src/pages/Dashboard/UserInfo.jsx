import { Box } from '@chakra-ui/layout'
import React from 'react'
import { useAuthState } from '../../context/auth-context'

export default function UserInfo() {
    const {user} = useAuthState();
    return (
        <Box mt={4}>
            <Box>
                id: <strong>{user.id}</strong>
            </Box>
            <Box>
                name: <strong>{user.name}</strong>
            </Box>
            <Box>
                username: <strong>{user.username}</strong>
            </Box>
            <Box>
                email: <strong>{user.email}</strong>
            </Box>
        </Box>
    )
}
