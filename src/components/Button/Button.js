import React from 'react';
import { useStyles } from './styles';
import { Button as Btn } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Button = ({ text, linkTo, type = 'button' }) => {
    const classes = useStyles();
    let btnRender = (
        <Btn type={type} className={classes.button}>
            {text}
        </Btn>
    );
    if (linkTo) {
        btnRender = (
            <Btn type={type} component={Link} to={linkTo} className={classes.button}>
                {text}
            </Btn>
        );
    }
    return btnRender;
};

export default Button;
