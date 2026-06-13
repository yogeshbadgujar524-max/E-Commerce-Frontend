import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Redux/ProductSlice'
import cartReducer from '../Redux/CartSlice'
import whishlistSlice from './WishlistSlice'
import orderSlice from '../Redux/OrderSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartReducer,
        wishlist:whishlistSlice,
        orders:orderSlice
    },
    
})