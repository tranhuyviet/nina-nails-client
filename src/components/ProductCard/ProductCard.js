import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const ProductCard = ({ image, name, price }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia image={image} title={name} className={classes.cardMedia} />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.name}>{name}</Typography>
                <Typography className={classes.price}>€{price}</Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button variant="outlined" startIcon={<AddShoppingCartIcon />} color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
