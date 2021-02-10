import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStyles } from './styles';
import { useCart } from '../../context/cartContext';
import { addToCart } from '../../lib/api';

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const { setCart } = useCart();

    const handleAddToCart = async () => {
        console.log('Add to cart', product.id);
        setCart(await addToCart(product.id, 1));
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
                    <Button variant="outlined" startIcon={<ShoppingCartOutlinedIcon />} type="button" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;
