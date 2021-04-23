import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
const CustomTextField = ({ name, label, required }) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller as={<TextField variant="standard" />} defaultValue="" control={control} fullWidth name={name} label={label} required={required} />
        </Grid>
    );
};

export default CustomTextField;