import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    cart: {},
    setCart: (cart) => {},
};

const CartContext = createContext({
    cart: {},
    setCart: (cart) => {},
});

// Types
const SET_CART = 'SET_CART';

const cartReducer = (state, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const setCart = (cart) => {
        dispatch({
            type: SET_CART,
            payload: cart,
        });
    };

    return <CartContext.Provider value={{ cart: state.cart, setCart }} {...props} />;
};

export const useCart = () => {
    return useContext(CartContext);
};
