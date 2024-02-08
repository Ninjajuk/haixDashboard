// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const submitOrder = (orderData) => async (dispatch) => {
  try {
    // Make a request to your backend API to submit the order
    const response = await api.post('/orders', orderData);

    // Assuming the backend returns the order details, set it in the state
    dispatch(setOrderDetails(response.data));

    // Clear the cart and order details from the client-side
    dispatch(clearCart());
  } catch (error) {
    // Handle errors appropriately (e.g., show an error message)
    console.error('Error submitting order:', error);
  }
};

const initialState = {
  // orderDetails: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    clearOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
});

export const { setOrderDetails, clearOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
