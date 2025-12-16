import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../store/reducers/ProductReducer";
import { errorReducer } from "../store/reducers/errorReducer";
import { cartReducer } from "../store/reducers/CartReducer";
import { authReducer } from "../store/reducers/authReducer";
import { paymentMethodReducer } from "../store/reducers/paymentMethodReducer";
import { adminReducer } from "../store/reducers/adminReducer";
import { orderReducer } from "../store/reducers/orderReducer";
import { sellerReducer } from "../store/reducers/sellerReducer";

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const selectUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
  ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
  : [];

const initialState = {
  auth: { user: user, selectUserCheckoutAddress },
  carts: { cart: cartItems },
};

export const store = configureStore({
  reducer: {
    products: productReducer,
    errors: errorReducer,
    carts: cartReducer,
    auth: authReducer,
    payment: paymentMethodReducer,
    admin: adminReducer,
    order: orderReducer,
    seller: sellerReducer,
  },
  preloadedState: initialState,
});

export default store;
