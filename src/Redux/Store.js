import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../Redux/ProductSlice'
import CartSlice from '../Redux/CartSlice'
import WishlistSlice from './WishlistSlice'
import OrderSlice from '../Redux/OrderSlice'

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        cart:CartSlice,
        wishlist:WishlistSlice,
        orders:OrderSlice
    },
    
})