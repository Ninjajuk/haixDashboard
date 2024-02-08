
import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];
// Load cart from local storage or use an empty array as the initial state
// let initialState;
// if (typeof window !== 'undefined') {
//  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
// }

const getInitialCartState = () => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
  }
  return [];
};

const initialState = getInitialCartState();

const saveCartToLocalStorage = (cart) => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cart", JSON.stringify(cart) || []);
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { _id, title, price, thumbnail, discountPercentage, brand } =
        action.payload;
        const newState = [...state];

      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.push({
          _id,
          title,
          price,
          thumbnail,
          discountPercentage,
          brand,
          quantity: 0,
        });
      }
      saveCartToLocalStorage(state);
    },
    removeItem(state, action) {
      // return state.filter((item) => item.id !== action.payload);
      const newState = state.filter((item) => item._id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    },
    increaseQuantity(state, action) {
      const item = state.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(state);
      }
    },

    // // Code for resetting the cart)
    clearCart: (state) => {
      const newState = [];
      localStorage.removeItem("cart");
      return newState;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
