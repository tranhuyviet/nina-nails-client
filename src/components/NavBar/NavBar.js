/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { AppBar, Badge, Grid, IconButton, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';
import logo from '../../images/logo.jpg';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context';
import { fetchCart } from '../../lib/api';

const NavBar = () => {
    const classes = useStyles();
    const { cart, setCart } = useCart();

    useEffect(() => {
        fetchCart().then((cart) => setCart(cart));
    }, []);

    console.log('CART: ', cart);

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
                        <NavLink className={classes.link} to="/classes" activeClassName={classes.linkActive}>
                            Classes
                        </NavLink>
                        <NavLink className={classes.link} to="/about" activeClassName={classes.linkActive}>
                            About Us
                        </NavLink>
                        <NavLink className={classes.link} to="/contact" activeClassName={classes.linkActive}>
                            Contact
                        </NavLink>
                    </Grid>
                    <Grid item sm={2} container justify="center" alignItems="center">
                        <IconButton component={Link} to="/cart">
                            <Badge badgeContent={cart.total_items ? cart.total_items : 0} showZero className={classes.barge} color="secondary">
                                <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
