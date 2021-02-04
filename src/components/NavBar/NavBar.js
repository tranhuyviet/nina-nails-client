import React from 'react';
import { AppBar, Badge, Grid, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';
import logo from '../../images/logo.jpg';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar color="transparent" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                <Grid container>
                    <Grid item sm={2} container justify="flex-end" alignItems="center">
                        <NavLink to="/home">
                            <img src={logo} variant="square" alt="logo" />
                        </NavLink>
                    </Grid>
                    <Grid item sm={8} container justify="center" alignItems="center">
                        <NavLink className={classes.link} to="/home" activeClassName={classes.linkActive}>
                            Home
                        </NavLink>
                        <NavLink className={classes.link} to="/products" activeClassName={classes.linkActive}>
                            Products
                        </NavLink>
                        <NavLink className={classes.link} to="/about" activeClassName={classes.linkActive}>
                            About Us
                        </NavLink>
                        <NavLink className={classes.link} to="/contact" activeClassName={classes.linkActive}>
                            Contact
                        </NavLink>
                    </Grid>
                    <Grid item sm={2} container justify="center" alignItems="center">
                        <Badge badgeContent={0} showZero className={classes.barge} color="secondary">
                            <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
                        </Badge>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
