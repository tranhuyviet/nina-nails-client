/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { CircularProgress, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';

import SearchIcon from '@material-ui/icons/Search';
// import _ from 'lodash';
import { fetchCategories, fetchProducts } from '../../lib/api';
import { useProduct } from '../../context';

const ProductPage = () => {
    const classes = useStyles();
    const { categories, products, filteredProducts, setCategories, setProducts, setFilteredProducts } = useProduct();
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const [categories, setCategories] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [productsSelected, setProductSelected] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleListItemClick = (event, index, categoryId) => {
        setSelectedIndex(index);
        // console.log(categoryId);
        // setSelectCategoryId(categoryId);
        setFilteredProducts({ categoryId });
    };

    // const filterProduct = (categoryId) => {
    //     setSearchText('');
    //     const filteredProducts = productsData.filter((product) => product.categoryId === categoryId);
    //     setProducts(filteredProducts);
    // };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setFilteredProducts({ text: e.target.value });
    };

    const getData = useCallback(async () => {
        setLoading(true);
        const categories = await fetchCategories();
        const products = await fetchProducts();
        setCategories(categories);
        setProducts(products);
        setFilteredProducts({ categoryId: 'all' });
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getData();
    }, []);

    // useEffect(() => {
    //     const searchedProducts = productsData.filter((product) => product.name.toLowerCase().includes(searchText));
    //     setProducts(searchedProducts);
    // }, [searchText]);

    console.log(categories, products);

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
                    <List>
                        <ListItem divider button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0, 'all')}>
                            <ListItemText primary={`All Products (${products.length})`} />
                        </ListItem>
                        {categories &&
                            categories.map((category, index) => (
                                <ListItem
                                    key={category.id}
                                    button
                                    selected={selectedIndex === index + 1}
                                    onClick={(event) => handleListItemClick(event, index + 1, category.id)}
                                    className={classes.listItem}
                                >
                                    <ListItemText primary={category.name} />
                                </ListItem>
                            ))}
                    </List>
                </Grid>
                <Grid item sm={10} container className={classes.productsContainer} justify="center" alignItems="center" spacing={4}>
                    {loading ? (
                        <div className={classes.circularProgress}>
                            <CircularProgress />
                        </div>
                    ) : (
                        filteredProducts && filteredProducts.map((product) => <ProductCard product={product} key={product.id} />)
                    )}
                </Grid>
            </Grid>
        </section>
    );
};

export default ProductPage;
