import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products as productsData } from '../../fake-data';
import SearchIcon from '@material-ui/icons/Search';
// import _ from 'lodash';

const ProductPage = () => {
    const classes = useStyles();
    // const initialProducts = _.sortBy(productsData, 'price');
    const [products, setProducts] = useState(productsData);
    const [searchText, setSearchText] = useState('');
    // const [sortPrice, setSortPrice] = useState('asc');

    const filterProduct = (categoryId) => {
        setSearchText('');
        const filteredProducts = productsData.filter((product) => product.categoryId === categoryId);
        setProducts(filteredProducts);
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    // const handleSort = (e) => {
    //     let sortProducts;
    //     console.log(e.target.value);
    //     if (e.target.value === 'asc') {
    //         sortProducts = _.sortBy(products, 'price');
    //     } else if (e.target.value === 'desc') {
    //         sortProducts = _.sortBy(products, 'price').reverse();
    //     }
    //     setSortPrice(e.target.value);
    //     setProducts(sortProducts);
    // };

    // function sortProducts(prods) {
    //     if (sortPrice === 'desc') {
    //         setProducts(prods.reverse());
    //     } else {
    //         setProducts(prods);
    //     }
    // }

    useEffect(() => {
        const searchedProducts = productsData.filter((product) => product.name.toLowerCase().includes(searchText));
        setProducts(searchedProducts);
    }, [searchText]);

    return (
        <section className={classes.productPage}>
            <Title title="Products" />
            <br />
            <Grid container justify="center" style={{ marginTop: 20 }}>
                <div className={classes.inputContainer}>
                    <input type="search" placeholder="Search product" className={classes.searchInput} value={searchText} onChange={handleSearch} />
                    <SearchIcon className={classes.searchIcon} />
                </div>
            </Grid>
            <Grid container className={classes.gridContainer}>
                <Grid item sm={2} className={classes.categoryContainer}>
                    <Typography
                        className={classes.categoryTitle}
                        onClick={() => {
                            setProducts(productsData);
                            setSearchText('');
                        }}
                    >
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
                            <ListItemText primary="Nail drill bits" onClick={() => filterProduct('4')} />
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
                            <FormControl variant="standard">
                                <div className={classes.sortContainer}>
                                    <Select value={sortPrice} onChange={handleSort}>
                                        <MenuItem value="asc">Sort by Price: Low to High</MenuItem>
                                        <MenuItem value="desc">Sort by Price: Hight to Low</MenuItem>
                                    </Select>
                                </div>
                            </FormControl>
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
