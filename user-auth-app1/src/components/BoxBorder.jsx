import { Box } from '@chakra-ui/layout'
import React from 'react'

export default function BoxBorder({children}) {
    return (
        <Box border={"1px solid #e1e1e1"} padding={"0 1rem 1.5rem"} borderRadius={4}>
            {children}
        </Box>
    )
}
