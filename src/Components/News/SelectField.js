import React from 'react';
import { Select, InputLabel, FormControl   } from '@mui/material';


const SelectField = ({children, id, label, className, ...props}) => {


    return(
        <FormControl fullWidth className={className}>
            <InputLabel id={id}>{ label }</InputLabel>
            <Select
                {...props}
                labelId={id}
                id={id}
            >
                {children}
            </Select>
        </FormControl>
    );
};

export default SelectField;