import React from 'react';
import { Box } from '@chakra-ui/react';

export default function PageTitle({ children }) {
    return (
        <div>
            <Box padding="1rem 0 .5rem" borderBottom="1px solid #e1e1e1">
                <h1>{children}</h1>
            </Box>
        </div>
    );
}
