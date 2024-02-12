import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTocart, removeTocart } from "../store/cartSlice";
export default function Cartitems({ item }) {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.stopPropagation();
    const { _id } = item;
    dispatch(removeTocart({ _id }));
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
      <div className="flex gap-4">
        <div className="flex">
          <img src="hardrock.png" className="rounded-full w-14"></img>
        </div>
        <div className="flex">
          {item.item_name}
          {item.item_description}
          {item.price}
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
        <button className="flex mt-1  text-red-600" onClick={deleteHandler}>
          <MdDelete />
        </button>
      </div>
    </>
  );
}
