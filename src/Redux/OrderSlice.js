import { createSlice } from "@reduxjs/toolkit";

const savedOrders =
  JSON.parse(localStorage.getItem("orders")) || [];

const OrderSlice = createSlice({
  name: "orders",

  initialState: {
    orders: savedOrders,
  },

  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        items: action.payload.items,
        total: action.payload.total,
        status: "Pending",
        date: new Date().toLocaleString(),
      };

      state.orders.push(newOrder);

      localStorage.setItem(
        "orders",
        JSON.stringify(state.orders)

        
      );
      
    },

    updateOrderStatus: (state, action) => {
      const order = state.orders.find(
        (item) => item.id === action.payload.id
      );

      if (order) {
        order.status = action.payload.status;

        localStorage.setItem(
          "orders",
          JSON.stringify(state.orders)
        );
      }
    },
  },
});

export const {
  placeOrder,
  updateOrderStatus,
} = orderSlice.actions;

export default OrderSlice.reducer;