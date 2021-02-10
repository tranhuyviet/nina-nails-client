import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    categories: [],
    products: [],
    filteredProducts: [],
    // loading: false,
};

const ProductContext = createContext({
    categories: [],
    setCategories: (categories) => {},
    products: [],
    setProducts: (products) => {},
    filteredProducts: [],
    setFilteredProducts: (categoryId) => {},
    // loading: false,
    // setLoading: () => {},
});

// Types
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
// const SET_LOADING = 'SET_LOADING';

const productReducer = (state, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SET_FILTERED_PRODUCTS:
            let filteredProducts = [];
            // filter by search input
            if (action.payload.text) {
                filteredProducts = state.products.filter((product) => product.name.toLowerCase().includes(action.payload.text.toLowerCase()));
            } else {
                filteredProducts = state.products;
            }

            // filter by select category
            if (action.payload.categoryId) {
                if (action.payload.categoryId === 'all') {
                    filteredProducts = state.products;
                } else {
                    filteredProducts = state.products.filter((product) => product.categories[0].id === action.payload.categoryId);
                }
            }
            return {
                ...state,
                filteredProducts,
            };
        default:
            return state;
    }
};

export const ProductProvider = (props) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const setCategories = (categories) => {
        dispatch({
            type: SET_CATEGORIES,
            payload: categories,
        });
    };

    const setProducts = (products) => {
        dispatch({
            type: SET_PRODUCTS,
            payload: products,
        });
    };

    const setFilteredProducts = ({ categoryId, text }) => {
        dispatch({
            type: SET_FILTERED_PRODUCTS,
            payload: { categoryId, text },
        });
    };

    return (
        <ProductContext.Provider
            value={{
                categories: state.categories,
                products: state.products,
                filteredProducts: state.filteredProducts,
                setCategories,
                setProducts,
                setFilteredProducts,
            }}
            {...props}
        />
    );
};

export const useProduct = () => {
    return useContext(ProductContext);
};
