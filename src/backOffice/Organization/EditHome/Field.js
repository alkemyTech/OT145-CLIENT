import React from 'react';
import { TextField } from '@mui/material';


const Field = ({ label, type, name, onChange, error, helperText, value }) => {

    if(type === 'file'){
        return (
            <TextField
              label={label}
              type={type}
              name={name}
              onChange={onChange}
              error={error}
              helperText={helperText}
            />
          );
    }else{
        return (
            <TextField
              label={label}
              type='text'
              name={name}
              onChange={onChange}
              value={value}
              error={error}
              helperText={helperText}
            />
          );
    }

  
};

export default Field;