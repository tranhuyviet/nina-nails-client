import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import lineImage from '../../images/line.png';
const Title = ({ title }) => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.title}>{title}</Typography>
            <img src={lineImage} alt="line" />
        </>
    );
};

export default Title;
