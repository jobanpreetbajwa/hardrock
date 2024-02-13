import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTocart, deleteCartItem, removeTocart } from "../store/cartSlice";
export default function Cartitems({ item }) {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.stopPropagation();
    const { _id } = item;
    dispatch(deleteCartItem(_id));
  };
  const addHandler = () => {
    const id = item._id;
    const obj = {
      ...item,
      price: item.price,
      quantity: 1,
    };
    dispatch(addTocart({ obj, id }));
  };
  const removeHandler = () => {
    const id = item._id;
    const obj = {
      ...item,
      price: item.price,
      quantity: 1,
    };
    dispatch(removeTocart({ obj, id }));
  };
  return (
    <>
      <div className="flex gap-8 p-4 items-center border-b border-black">
        <div className="flex h-20 w-20">
          <img
            src={`${item.item_image ? item.item_image : "coffee1.avif"}`}
            className="w-full rounded-full"
          ></img>
        </div>
        <div className="flex w-24 truncate font-serif font-bold capitalize tracking-wider">
          {item.item_name}
          {"   " + item.quantity}
        </div>
        <div className="mx-2 text-white">
          <button
            className="px-2 mx-1 bg-rose-900 rounded-lg hover:bg-rose-950"
            onClick={addHandler}
          >
            +
          </button>
          <button
            className="px-2  bg-rose-900 rounded-lg hover:bg-rose-950"
            onClick={removeHandler}
          >
            -
          </button>
        </div>
        <button
          className="flex mt-1 text-2xl pb-1 text-red-600 hover:text-rose-950"
          onClick={deleteHandler}
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
}
