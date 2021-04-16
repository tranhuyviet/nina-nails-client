import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import Title from '../../components/Title/Title';
import { useCart } from '../../context';
import { useStyles } from './styles';
import { emptyCart } from '../../lib/api';
import { Link } from 'react-router-dom';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';

const CartPage = () => {
    const classes = useStyles();
    const { cart, setCart } = useCart();

    const handleEmptyCart = async () => {
        console.log('empty cart');
        const cart = await emptyCart();
        setCart(cart);
    };

    if (!cart) return <p>Loading...</p>;
    console.log('CART PAGE RENDER', cart);

    return (
        <section className={classes.cartPage}>
            <Container>
                <Title title="Your cart" />
                <Grid container style={{ padding: '40px 0' }} justify="center">
                    {cart && cart.line_items && cart.line_items.length > 0 ? (
                        <Grid item container>
                            <Grid item container justify="center" style={{ width: 870, margin: '0 auto', paddingBottom: 20 }}>
                                <Typography style={{ width: 60, fontWeight: 'bold' }}>Image</Typography>
                                <Typography style={{ width: 400, fontWeight: 'bold' }}>Name</Typography>
                                <Typography style={{ width: 100, fontWeight: 'bold' }}>Price</Typography>
                                <Typography style={{ width: 160, fontWeight: 'bold' }}>Quantity</Typography>
                                <Typography style={{ width: 100, fontWeight: 'bold' }}>Total</Typography>
                                <Typography style={{ width: 50, fontWeight: 'bold' }}>Action</Typography>
                            </Grid>
                            <div className={classes.cartItemContainer}>
                                {cart && cart.line_items && cart.line_items.map((item) => <CartItem item={item} key={item.id} />)}
                            </div>

                            <Grid item container justify="flex-end" style={{ width: 870, margin: '0 auto', padding: '20px 0' }}>
                                <Typography className={classes.total}>Subtotal: {cart.subtotal && cart.subtotal.formatted_with_symbol}</Typography>
                            </Grid>
                            <Grid item container justify="flex-end" style={{ width: 870, margin: '0 auto', paddingBottom: 20 }}>
                                <Button startIcon={<DeleteOutlinedIcon />} variant="outlined" onClick={handleEmptyCart}>
                                    Empty Cart
                                </Button>
                                <Button
                                    startIcon={<PaymentOutlinedIcon />}
                                    variant="contained"
                                    color="primary"
                                    style={{ marginLeft: 40 }}
                                    component={Link}
                                    to="/checkout"
                                >
                                    Check out
                                </Button>
                            </Grid>
                        </Grid>
                    ) : (
                        <Typography>
                            You have no items in your shopping cart.{' '}
                            <Link to="/products" className={classes.link}>
                                Shop now
                            </Link>
                        </Typography>
                    )}
                </Grid>
            </Container>
        </section>
    );
};

export default CartPage;
