import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./ShoppingCart/CartSlice";
import CartSliceUi from "./ShoppingCart/CartSliceUi";

const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        cartUi: CartSliceUi.reducer,
    }
})

export default store;