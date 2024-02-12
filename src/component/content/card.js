import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeTocart } from "../store/cartSlice";
export default function Card({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const admin = useSelector((state) => state.admin.isAdmin);

  useEffect(() => {
    console.log(admin, "admin in card");
  }, [item.item_name]);

  const para =
    "A mouthwatering combination of grilled beef patty, fresh lettuce, tomato, cheese, and our special sauce, served on a toasted bun";

  const addHandler = () => {
    const id = item["_id"];
    const obj = {
      ...item,
      price: item.price, //use slice when using strings
      quantity: quantity,
    };
    dispatch(addTocart({ obj, id }));
    setQuantity(1);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const editHandler = (e) => {
    e.stopPropagation();
    const id = item._id;
    console.log(localStorage.getItem("all"));
    const name = prompt("give item name");
    item.name = name;
    const obj = JSON.parse(localStorage.getItem("all"));
    obj[id].name = name;
    localStorage.removeItem("all");
    localStorage.setItem("all", JSON.stringify(obj));
    console.log(localStorage.getItem("all"));
  };

  return (
    <>
      <div className="flex flex-col gap-4 h-600  my-4 p-2 border-b-2">
        <div className="flex justify-between">
          <img src="hardrock.png" className="rounded h-16"></img>
          <div className="flex gap-2 font-bold underline underline-offset-8 justify-between">
            <div className="font-serif  capitalize">{item.item_name}</div>
            <p className="text-amber-900">${item.price}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="w-96">{item.item_description}</p>
          <div className="flex gap-1 justify-end text-black font-serif tracking-wider ">
            <button
              className=" flex gap-2 px-2 rounded-lg text-center item-center  outline outline-slate-300"
              onClick={addHandler}
            >
              Add <p className="text-red-600">+</p>
            </button>
            <div className="flex gap-1 ml-2 rounded-lg text-center item-center  outline  outline-slate-300">
              <button className="mx-2" onClick={addQuantity}>
                +
              </button>
              <p className="text-red-600">{quantity}</p>
              <button className="mx-2" onClick={removeQuantity}>
                -
              </button>
            </div>
            {admin && (
              <button className="bg-lime-400 rounded" onClick={editHandler}>
                edit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
