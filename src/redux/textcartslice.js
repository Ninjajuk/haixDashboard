import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  orderItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, title, price, thumbnail, discountPercentage, brand } =
        action.payload;
      const newState = { ...state };

      // Check if the item already exists in the cart
      const existingItem = newState.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        newState.cartItems.push({
          id,
          title,
          price,
          thumbnail,
          discountPercentage,
          brand,
          quantity: 1,
        });
      }
      saveCartToLocalStorage(newState.cartItems);
      return newState;
    },
    removeItem(state, action) {
      const newState = { ...state };
      newState.cartItems = newState.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveCartToLocalStorage(newState.cartItems);
      return newState;
    },
    increaseQuantity(state, action) {
      const newState = { ...state };
      const item = newState.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(newState.cartItems);
      return newState;
    },
    decreaseQuantity(state, action) {
      const newState = { ...state };
      const item = newState.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToLocalStorage(newState.cartItems);
      return newState;
    },

    // // Code for resetting the cart
    clearCart: (state) => {
      const newState = { ...state, cartItems: [] };
      localStorage.removeItem("cart");
      return newState;
    },

    // New action to save order items
    saveOrderItems: (state) => {
      const newState = { ...state };
      newState.orderItems = [...state.cartItems];
      return newState;
    },

    // New action to clear order items
    clearOrderItems: (state) => {
      const newState = { ...state, orderItems: [] };
      return newState;
    },
  },
});
