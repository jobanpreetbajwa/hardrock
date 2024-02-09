import React from "react";
import { useDispatch } from "react-redux";
import { addTocart, removeTocart } from "../store/cartSlice";
export default function Card({ item }) {
  const dispatch = useDispatch();

  const price = 150;

  const para =
    "A mouthwatering combination of grilled beef patty, fresh lettuce, tomato, cheese, and our special sauce, served on a toasted bun";

  const addHandler = () => {
    console.log("clicked");
    dispatch(addTocart({ price }));
  };

  return (
    <>
      <div className="flex gap-4 h-600 flex-wrap my-4 py-2 border-b-2">
        <div>
          <img src="hardrock.png" className="rounded h-16"></img>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 font-bold underline underline-offset-8 justify-between">
            <div className="font-serif  capitalize">{item.name}</div>
            <p className="text-amber-900">${item.price}</p>
          </div>
          <p className="w-96">{para}</p>
          <div className="flex gap-1 justify-end text-white">
            <button className=" bg-rose-950 px-2 rounded-lg text-center item-center  outline">
              Add
            </button>
            <button
              className=" bg-rose-950  rounded-full text-center item-center w-6 outline"
              onClick={addHandler}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
