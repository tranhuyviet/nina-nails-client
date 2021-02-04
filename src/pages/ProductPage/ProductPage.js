import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products as productsData } from '../../fake-data';
// import SearchIcon from '@material-ui/icons/Search';

const ProductPage = () => {
    const classes = useStyles();
    const [products, setProducts] = useState(productsData);
    // const [searchText, setSearchText] = useState('');

    const filterProduct = (categoryId) => {
        const filteredProducts = productsData.filter((product) => product.categoryId === categoryId);
        setProducts(filteredProducts);
    };

    // const handleSearch = (e) => {
    //     setSearchText(e.target.value);
    // };

    return (
        <section className={classes.productPage}>
            <Title title="Products" />
            <br />

            <Grid container className={classes.gridContainer}>
                <Grid item sm={2} className={classes.categoryContainer}>
                    <Typography className={classes.categoryTitle} onClick={() => setProducts(productsData)}>
                        All Products ({`${productsData.length}`})
                    </Typography>
                    <List>
                        <ListItem button onClick={() => filterProduct('1')}>
                            <ListItemText primary="Gel NinaD" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Brushes" onClick={() => filterProduct('2')} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Acrylic" onClick={() => filterProduct('3')} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Nail drill bits" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={10} container className={classes.productsContainer}>
                    {/* <Grid item sm={12} className={classes.searchBarContainer}>
                        <div className={classes.searchBar}>
                            <div className={classes.inputContainer}>
                                <input type="search" placeholder="Search product" className={classes.searchInput} value={searchText} onChange={handleSearch} />
                                <SearchIcon className={classes.searchIcon} />
                            </div>
                        </div>
                    </Grid> */}
                    {products &&
                        products.map((product) => (
                            <Grid item sm={3} className={classes.cardContainer} key={product.id}>
                                <ProductCard image={product.image} name={product.name} price={product.price} />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </section>
    );
};

export default ProductPage;
