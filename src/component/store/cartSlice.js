import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { json } from "react-router-dom";

const inventry = {
  data:{},
  old:[],
  new:[],
  deleted:[]
}

export const inventrySlice = createSlice({
  name:"inventry",
  initialState:inventry,
  reducers:{
    oldUpdated:(state,action)=>{
      state.old.push(action.payload)
    },
    setNewdata:(state,action)=>{
      state.new.push(action.payload)
    },
    deleteItems:(state,action)=>{
      state.deleted.push(action.payload)
    }
  }
})


                                                            //user login info
const user = {
  token: "",
};
export const loggedSlice = createSlice({
  name: "looged",
  initialState: user,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = "";
    },
  },
});



const admin = {                                              //admin login info
  isAdmin: false,
};
export const adminSlice = createSlice({
  name: "admin",
  initialState: admin,
  reducers: {
    adminLogin: (state) => {
      state.isAdmin = true;
      console.log(state.isAdmin, "admin");
    },
  },
});



const item = {
  total: 0,
  length: 0,
  itemList: [],
};                                                         //cart 
const cartSlice = createSlice({
  name: "cart",
  initialState: item,
  reducers: {
    addTocart: (state, action) => {
      const newItem = action.payload.obj;
      const existingItem = state.itemList[newItem._id];
      const newState = {
        ...state,
        itemList: { ...state.itemList },
      };
      if (existingItem) {
        newState.itemList[newItem._id] = {
          ...existingItem,
          quantity: existingItem.quantity + newItem.quantity,
        };
      } else {
        newState.itemList[newItem._id] = newItem;
      }
      newState.total += newItem.price * newItem.quantity;
      newState.length += newItem.quantity;

      return newState;
    },
    removeTocart: (state, action) => {
      const itemId = action.payload.id;
      if (!action.payload.obj) {
        console.log(action.payload.id, "remove obj with id");
        delete state.itemList[itemId]; //deleting whole item
        return;
      }
      const itemToRemove = state.itemList[itemId];
      if (itemToRemove) {
        let updatedItemList = { ...state.itemList };
        let newTotal = state.total;
        if (itemToRemove.quantity > 1) {
          updatedItemList[itemId] = {
            ...itemToRemove,
            quantity: itemToRemove.quantity - 1,
          };
        } else {
          delete updatedItemList[itemId];
        }

        newTotal -= itemToRemove.price;

        return {
          ...state,
          itemList: updatedItemList,
          total: newTotal,
          length: state.length - 1,
        };
      }
    },
    clearCart: (state) => {
      state.itemList = {};
      state.length = 0;
      state.total = 0;
    },
  },
});


export const {oldUpdated,setNewdata,deleteItems} = inventrySlice.actions
export const { logIn, logOut } = loggedSlice.actions;
export const { adminLogin } = adminSlice.actions;
export const { addTocart, removeTocart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
