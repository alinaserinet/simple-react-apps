import { Alert, AlertIcon } from '@chakra-ui/alert'
import { Stack } from '@chakra-ui/layout';
import React from 'react'
import { useAlertsState } from '../context/alert-context/alert-context'

export default function Alerts() {
    const { alert } = useAlertsState();
    return (
        <>
            { alert &&
                <Stack spacing={3}>
                    <Alert
                        key={alert.message}
                        status={alert.status}
                        mb={4}
                        variant="top-accent" >
                        <AlertIcon />
                        {alert.message}
                    </Alert>
                </Stack>
            }
        </>
    )
}
