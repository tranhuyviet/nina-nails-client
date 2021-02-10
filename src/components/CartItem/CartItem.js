import { CircularProgress, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';

import RemoveIcon from '@material-ui/icons/Remove';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { removeProductFromCart, updateCartQuantity } from '../../lib/api';
import { useCart } from '../../context';

const CartItem = ({ item }) => {
    const classes = useStyles();
    const { setCart } = useCart();
    const [loading, setLoading] = useState(false);

    const handleRemoveProductFromCart = async () => {
        setLoading(true);
        const cart = await removeProductFromCart(item.id);
        setCart(cart);
        setLoading(false);
    };

    const handleUpdateCartQuantity = async (quantity) => {
        setLoading(true);
        const cart = await updateCartQuantity(item.id, item.quantity + quantity);
        setCart(cart);
        setLoading(false);
    };

    return (
        <Grid item container alignItems="center" justify="center" className={classes.cartItem}>
            <img src={item.media.source} alt={item.product_name} width="60" height="60" />

            <Typography style={{ width: 400 }}>{item.product_name}</Typography>
            <Typography style={{ width: 100 }}>{item.price.formatted_with_symbol}</Typography>

            <div className={classes.quantityContainer}>
                <div>
                    <IconButton type="button" size="small" onClick={() => handleUpdateCartQuantity(-1)} disabled={loading}>
                        <RemoveIcon />
                    </IconButton>
                </div>
                <Typography className={classes.quantityText}>{loading ? <CircularProgress size={22} /> : item.quantity}</Typography>
                <div>
                    <IconButton type="button" size="small" onClick={() => handleUpdateCartQuantity(1)} disabled={loading}>
                        <AddRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <Typography className={classes.totalText}>{item.line_total.formatted_with_symbol}</Typography>
            <div style={{ width: 50 }}>
                <IconButton size="small" onClick={handleRemoveProductFromCart} disabled={loading}>
                    <DeleteOutlinedIcon />
                </IconButton>
            </div>
        </Grid>
    );
};

export default CartItem;
