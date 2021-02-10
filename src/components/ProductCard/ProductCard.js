import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStyles } from './styles';
import { useCart } from '../../context';
import { addToCart } from '../../lib/api';

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const { setCart } = useCart();
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        console.log('Add to cart', product.id);
        setLoading(true);
        const cart = await addToCart(product.id, 1);
        setCart(cart);
        setLoading(false);
    };

    return (
        <Grid item xs={12} sm={6} md={4} container justify="center">
            <Card className={classes.card}>
                <CardMedia image={product.media.source} className={classes.cardMedia} title={product.name} />
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing classes={{ root: classes.cardActions }}>
                    <Button
                        variant="outlined"
                        startIcon={loading ? <CircularProgress size={20} /> : <ShoppingCartOutlinedIcon />}
                        type="button"
                        disabled={loading}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;
