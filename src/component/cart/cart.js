import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Cartitems from "./cartItems";
import { clearCart } from "../store/cartSlice";
export default function Cart(props) {
  const dispatch = useDispatch();
  const { num, amount, list } = useSelector((state) => {
    const data = {
      num: state.cart.itemList.length,
      amount: state.cart.total,
      list: Object.values(state.cart.itemList),
    };
    return data;
  });
  const cartHandler = () => {
    dispatch(clearCart());
    props.onClose(false);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 w-2/3 mt-8">
          <div className="flex justify-between font-serif bg-slate-50 p-3">
            <div>12379173</div>
            <div className="flex ">
              <div className="flex px-2">
                <p className="mt-1">
                  <IoCartOutline />
                </p>
                <p className="mx-1">{num}</p>
                <p className="mx-1">Items</p>
              </div>
              <div className="flex">
                <p>$</p>
                <p>{amount}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            {list.map((item) => {
              return <Cartitems  item={item}/>;
            })}
          </div>
          <div className="flex justify-center gap-6">
            <button
              className=" bg-rose-950  p-1 rounded text-white text-center item-center"
              onClick={cartHandler}
            >
              clear
            </button>
            <button className="bg-rose-950  p-1 rounded text-white text-center item-center">
              checkOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
