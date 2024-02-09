import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { ReactDOM } from "react";
import Cart from "../cart/cart";
import { createPortal } from "react-dom";
export default function Menuheader() {
  const [portal, setPortal] = useState(false);
  const num = useSelector((state) => {
    return Object.keys(state.cart.itemList).length;
  });
  const cartHandler = () => {
    console.log("portal");
    setPortal(true);
  };
  return (
    <>
      <div className="flex gap-5 p-4 justify-between">
        <div>
          <img src="hardrock.png" className="rounded h-16 "></img>
        </div>
        <div className="flex flex-col items-center justify-center font-bold font-serif uppercase ">
          <p className="text-center text-2xl">Sunrise </p>
          <p className="text-center ">oue menu </p>
        </div>
        <div className="flex items-center justify-center py-0">
          <button onClick={cartHandler}>
            <IoCartOutline />
          </button>
          <p className="py-0 px-0 -mt-5 text-xs bg-rose-950 text-white rounded-full text-center item-center w-3 h-max">
            {num}
          </p>
        </div>
        {portal &&
          createPortal(
            <div className="absolute bg-white left-0 top-0 h-full w-full">
              <Cart onClose={setPortal} />
            </div>,
            document.body
          )}
      </div>
    </>
  );
}