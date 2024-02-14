import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setNewdata } from "../store/cartSlice";
export default function Customize({ setMenu, customize }) {
  const inventry = useSelector((state) => state.inventry);
  const dispatch = useDispatch();
  const [item_image, setItem_image] = useState("");
  const [quantity, setItem_quantity] = useState("");
  const [item_name, setItem_name] = useState("");
  const [item_description, setItem_description] = useState("");
  const [price, setPrice] = useState("");

  // const imageHandler = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const imageDataURL = reader.result;
  //       setItem_image(imageDataURL);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const submitHandler = () => {
    let obj = {};
    let item_id = "";

    try {
      const formData = new FormData();
      formData.append("file", item_image);
      formData.append("item_name", item_name);
      formData.append("price", price);
      formData.append("item_description", item_description);
      formData.append("item_quantity", quantity);
      const res = fetch("http://192.168.1.60:5000/inventory/add", {
        method: "POST",

        body: formData,
      });
      if (res.OK) {
        console.log(res.new, "new item added");
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("error while sending data");
    }
    setMenu((prev) => {
      item_id = nanoid();
      obj = {
        item_image,
        item_id,
        item_name,
        price,
        quantity,
        item_description,
      };
      return { ...prev, [item_id]: obj };
    });
    dispatch(setNewdata(obj));
    customize(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center gap-4 capitalize font-bold font-serif
    "
      encType="multipart/form-data"
    >
      <label>img file :</label>
      <input
        type="file"
        name="file"
        className="w-max outline"
        onChange={(e) => {
          setItem_image(e.target.files[0]);
        }}
        required
      />

      <label>Item name :</label>
      <input
        type="text"
        className="w-max outline"
        onBlur={(e) => {
          setItem_name(e.target.value);
        }}
      />

      <label>item price :</label>
      <input
        type="number"
        className="w-max outline"
        onBlur={(e) => {
          setPrice(e.target.value);
        }}
      />
      <label>Item quantity :</label>
      <input
        type="number"
        className="w-max outline"
        onBlur={(e) => {
          setItem_quantity(e.target.value);
        }}
      />

      <label>item description :</label>
      <textarea
        type="text"
        className="w-max outline"
        onBlur={(e) => {
          setItem_description(e.target.value);
        }}
      />
      <div className="flex gap-2 justify-evenly">
        <button
          type="submit"
          className="bg-rose-950 px-3 py-1 rounded-lg mt-3 text-white"
        >
          Add item
        </button>
        <button
          className="bg-rose-950 px-3 py-1 rounded-lg mt-3 text-white"
          onClick={() => {
            customize(false);
          }}
        >
          back
        </button>
      </div>
    </form>
  );
}
