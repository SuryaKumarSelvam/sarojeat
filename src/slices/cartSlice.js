import {createSlice} from '@reduxjs/toolkit'
import reducer from './userSlice'

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
  addCart: (state, action) => {
    const { id, quantity } = action.payload;

    const existingItem = state.cartItems.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;

      if (existingItem.quantity < 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    } else {
      if (quantity > 0) {
        state.cartItems = [...state.cartItems,action.payload];
      }
    }
  },
  removeCart: (state, action) => {
    console.log(action.payload)
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
  },
},

})


export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer
