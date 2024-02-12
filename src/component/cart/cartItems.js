import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTocart } from "../store/cartSlice";
export default function Cartitems({item}) {
  const dispatch = useDispatch()
  const deleteHandler = (e)=>{
    e.stopPropagation()
    const {id }= item
    dispatch(removeTocart({id}))
  }
  return (
    <>
      <div className="flex gap-4">
        <div className="flex">
          <img src="hardrock.png" className="rounded-full w-14"></img>
        </div>
        <div className="flex">
          <p id="itemId">{item.id} </p>
           {item.content} {item.price}{"   "+item.quantity}</div>
        <button className="flex mt-1 bg-yellow-200 " onClick={deleteHandler}>
          <MdDelete />
        </button>
      </div>
    </>
  );
}
