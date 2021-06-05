import React from 'react';
import {Box, Button} from "@chakra-ui/react";

const FormButton = ({isLoading}) => {
    return (
        <Box marginTop={6}>
            <Button
                colorScheme="green"
                type="submit"
                isLoading={isLoading}
                width={"100%"}
            >Submit</Button>
        </Box>
    );
};

export default FormButton;