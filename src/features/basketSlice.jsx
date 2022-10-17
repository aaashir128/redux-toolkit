import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalAmout: 0,
  cartTotalQty: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action) => {
      // state.push(action.payload);
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQty += 1;
      } else {
        const tempProduct = { ...action.payload, cartQty: 1 };
        state.cartItem.push(tempProduct);
      }
    },
    remove: (state, action) => {
      console.log("state", state, "action>", action.payload);
      //   return state.filter((item) => item.id !== action.payload);
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      console.log("itemIndex", itemIndex);
      if (itemIndex >= 0) {
        if (state.cartItem[itemIndex].cartQty > 0) {
          state.cartItem[itemIndex].cartQty -= 1;
        }
      } else {
        state.cartItem.splice(itemIndex, 1);
        console.log("calling condition");
      }

      // let newBasket = [...state];
      // if (index >= 0) {
      //   newBasket(index, 1);
      // }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = basketSlice.actions;

export default basketSlice.reducer;
