import React from 'react';
import { Select } from '@mui/material';


const SelectField = ({children, ...props}) => {
    return(
        <Select
            {...props}
        >
            {children}
        </Select>
    );
};

export default SelectField;