import { commerce } from './commerce';

export const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    return data;
};

export const fetchProductsByCategory = async (categoryId) => {
    const { data } = await commerce.products.list({ category_id: categoryId });
    return data;
};

export const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    return data;
};

export const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    return cart;
};

export const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    return cart;
};

export const updateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    return cart;
};

export const removeProductFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    return cart;
};

export const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    return cart;
};

export const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    return newCart;
};

export const captureCheckout = async (checkoutTokenId, newOrder) => {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    return incomingOrder;
};

export const generateToken = async (cartId) => {
    const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });

    return token;
};

export const getLiveToken = async (checkoutTokenId) => {
    const live = await commerce.checkout.getLive(checkoutTokenId);

    return live;
};
