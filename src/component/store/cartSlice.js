import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const item = {
  total: 600,
  length:3,
  itemList: {
    1:{
    id:1,
    img:"imageUrl",
    content:"item content1",
    price:"$120",
    quantity:1
    },
    2:{
    id:2,
    img:"imageUrl",
    content:"item content2",
    price:"$120",
    quantity:1
    },
    3:{
    id:3,
    img:"imageUrl",
    content:"item content3",
    price:"$120",
    quantity:3
    }
  },
};

const user = {
  token:""
}
export const loggedSlice = createSlice({
  name:"looged",
  initialState:user,
  reducers:{
    logIn:(state,action)=>{
      state.token=action.payload
    },
    logOut:(state)=>{
      state.token=""
    }
  }
})

const admin = {
  isAdmin:false
}
export const adminSlice = createSlice({
  name:"admin",
  initialState:admin,
  reducers:{
    adminLogin:(state)=>{
      state.isAdmin=true
      console.log(state.isAdmin,"admin")
    }
  }
})

const cartSlice = createSlice({
  name: "cart",
  initialState: item,
  reducers: {
    addTocart: (state, action) => {
      
      if (state.itemList[action.payload.id]) {
        state.itemList[action.payload.id].quantity += 1;
      } else {
        state.itemList[nanoid(5)] = action.payload;
      }
      state.total += action.payload.price;
      state.length+=1
      console.log(state.items);
    },
    removeTocart: (state, action) => {
      console.log(state.itemList[action.payload.id],"obj")
      if (
        state.length > 0 &&
        state.itemList[action.payload.id].quantity > 0
      ) {
        const price = state.itemList[action.payload.id].price.slice(1,)
        state.total -= price;
        if (state.itemList[action.payload.id].quantity > 1) {
          state.itemList[action.payload.id].quantity -= 1;
        } else {
          state.length -=1
          delete state.itemList[action.payload.id];
        }
      }
    },
    clearCart: (state) => {
      state.itemList = {};
    },
  },
});
export const {logIn,logOut} = loggedSlice.actions
export const {adminLogin} = adminSlice.actions
export const { addTocart, removeTocart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
