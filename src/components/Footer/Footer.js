import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Footer = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <footer className={classes.footer}>
            <Typography className={classes.text}>
                Copyright &copy; <span>{year}</span> <span className={classes.name}>Nina Nails</span>. All rights reserved.
            </Typography>
        </footer>
    );
};

export default Footer;
