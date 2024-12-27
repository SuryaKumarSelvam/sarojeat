import {createSlice} from '@reduxjs/toolkit'
import reducer from './userSlice'



const getLocalStorage = ()=>{
  const cart = localStorage.getItem('cartItems');
  return cart ? JSON.parse(cart) : [];
}

const initialState = {
    cartItems:getLocalStorage()
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
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
  },
  removeCart: (state, action) => {
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
  },

},

})


export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer
