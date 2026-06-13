import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    toggleWishlist: (state, action) => {

  const exists = state.items.find(
    item => item.id === action.payload.id
  );

  if (exists) {
    state.items = state.items.filter(
      item => item.id !== action.payload.id
    );
  } else {
    state.items.push(action.payload);
  }
},

  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
} = WishlistSlice.actions;

export default WishlistSlice.reducer;