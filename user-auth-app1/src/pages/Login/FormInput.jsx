import React from 'react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormInput({name, type, value, handler}) {
    
    return (
        <FormControl id={name} marginTop={6} >
            <FormLabel>{name}</FormLabel>
            <Input
                type={type || "text"}
                name={name}
                value={value}
                onChange={handler}
                autoComplete="off" />
        </FormControl>
    );
}