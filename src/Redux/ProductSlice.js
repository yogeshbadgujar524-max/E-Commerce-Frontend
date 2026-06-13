import { createSlice } from "@reduxjs/toolkit";
import data from "../Product";

const ProductSlice = createSlice({
  name: "products",

  initialState: {
    products: data.products,
    filteredProducts: data.products,
  },

  reducers: {

    searchProduct: (state, action) => {
      state.filteredProducts =
        state.products.filter(product =>
          product.title
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        );
    },

    filterCategory: (state, action) => {
      if (action.payload === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts =
          state.products.filter(
            product =>
              product.category === action.payload
          );
      }
    },

    filterPrice: (state, action) => {

      if (action.payload === "0-50") {
        state.filteredProducts =
          state.products.filter(
            product => product.price <= 50
          );
      }

      else if (action.payload === "50-100") {
        state.filteredProducts =
          state.products.filter(
            product =>
              product.price > 50 &&
              product.price <= 100
          );
      }

      else if (action.payload === "100+") {
        state.filteredProducts =
          state.products.filter(
            product => product.price > 100
          );
      }
    },

    filterRating: (state, action) => {
      state.filteredProducts =
        state.products.filter(
          product =>
            product.rating.rate >= Number(action.payload)
        );
    },

    sortProducts: (state, action) => {

      if (action.payload === "low") {

        state.filteredProducts = [
          ...state.filteredProducts
        ].sort(
          (a, b) => a.price - b.price
        );

      }

      else if (action.payload === "high") {

        state.filteredProducts = [
          ...state.filteredProducts
        ].sort(
          (a, b) => b.price - a.price
        );

      }

      else if (action.payload === "rating") {

        state.filteredProducts = [
          ...state.filteredProducts
        ].sort(
          (a, b) => b.rating - a.rating
        );

      }
    },

    clearFilters: (state) => {
      state.filteredProducts =
        state.products;
    },

  },
});

export const {
  searchProduct,
  filterCategory,
  filterPrice,
  filterRating,
  sortProducts,
  clearFilters,
} = ProductSlice.actions;

export default ProductSlice.reducer;