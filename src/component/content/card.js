import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import {
  addTocart,
  deleteItems,
  oldUpdated,
  removeTocart,
  updateData,
} from "../store/cartSlice";
import useEdit from "../utils/useEdit";
import useUpdateimage from "../utils/useUpdateimage";
export default function Card({ item, setMenu, menu }) {
  const updateImage = useUpdateimage;
  const [newImage, setNewimage] = useState("");
  const [changeImage, setChangeimage] = useState(false);
  const [editField, setEditfield] = useState(false);
  const [newObj, setNewobj] = useState({
    item_name: "",
    price: "",
    item_description: "",
  });
  const editData = useEdit;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // let admin = useSelector((state) => state.admin.isAdmin);

  const obj = JSON.parse(window.sessionStorage.getItem("login"));
  const admin = obj.admin;

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
    setEditfield(true);

    // const id = +item._id;
    // const item_name = prompt("give item name");
    // const price = prompt("price?");
    // const item_description = prompt("give discription");

    // //image url is missing

    // const obj = {
    //   ...item,
    //   item_name,
    //   item_description,
    //   price,
    // };
    // const newList = {
    //   ...menu,
    // };
    // newList[id] = obj;
    // editData();
    // const editObj = async () => {
    //   try {
    //     const res = await fetch(
    //       `http://192.168.1.60:5000/inventory/edit/${item._id}`,
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(obj),
    //       }
    //     );
    //     console.log(res, "response");
    //     if (res.ok) {
    //       console.log("deleted successfully");
    //     } else {
    //       setTimeout(() => {
    //         alert(`item not deleted ${item.item_image}`);
    //       }, 1000);
    //     }
    //   } catch (error) {
    //     console.log("Error while deleting data", error);
    //   }
    // };
    // editObj();
    // setMenu(newList);
    // dispatch(oldUpdated(obj));
  };

  const changeHandler = (e) => {
    //changeHandler
    const property = e.target.id;
    console.log(e.target.innerText, "innerText");
    const val = prompt("enter new value for ", e.target.innerText);
    setNewobj((prev) => {
      return { ...prev, [property]: val };
    });
  };

  const saveHandler = () => {
    if (
      newObj.item_name ||
      newObj.item_description ||
      newObj.price ||
      newObj.item_image
    ) {
      const obj = { ...item, ...newObj };
      // const formData = new FormData();
      // formData.append("file", newImage || item.item_image);
      // formData.append("item_name", newObj.item_name || item.item_name);
      // formData.append("price", newObj.price || item.price);
      // formData.append(
      //   "item_description",
      //   newObj.item_description || item.item_description
      // );
      // console.log(formData, "formdata");
      editData(obj, item._id);
      setMenu((prev) => {
        return { ...prev, [item._id]: obj };
      });
    } else {
      console.log("empty");
      return;
    }
    setEditfield(false);
  };
  const deleteHandler = (e) => {
    if (editField) {
      setEditfield(false);
      return;
    } else {
      e.stopPropagation();
      const id = item._id;
      const newList = {
        ...menu,
      };
      delete newList[id];
      const deleteObj = async () => {
        try {
          const res = await fetch(
            `http://192.168.1.60:5000/inventory/remove/${item._id}`,
            {
              method: "DELETE",
            }
          );
          console.log(res, "response");
          if (res.ok) {
            console.log("deleted successfully");
          } else {
            setTimeout(() => {
              alert(`item not deleted ${item.item_image}`);
            }, 1000);
          }
        } catch (error) {
          console.log("Error while deleting data", error);
        }
      };
      deleteObj();
      setMenu(newList);
      dispatch(deleteItems(id));
    }
  };
  return (
    <>
      <div className="flex   h-600  my-4 p-2 border-b-2">
        <div className="flex justify-between items-center  min-w-56">
          {editField ? (
            <div className="flex flex-col relative">
              <img
                onClick={() => setChangeimage(true)}
                src={`${item.item_image ? item.item_image : "coffee3.avif"}`}
                className="rounded h-36 w-44 hover:cursor-crosshair hover:opacity-40"
              />
              {changeImage && (
                <input
                  id="item_image"
                  onChange={(e) => updateImage(item._id, e.target.files[0])}
                  type="file"
                  className="bg-black bg-opacity-60 h-6 w-32 absolute top-14 left-6 "
                ></input>
              )}
            </div>
          ) : (
            <img
              src={`${item.item_image ? item.item_image : "coffee3.avif"}`}
              className="rounded h-36 w-44 "
            />
          )}
        </div>
        <div className="flex flex-col gap-2 flex-1  ">
          <div className="flex gap-2 flex-1 font-bold h-fit border-black border-b-2 justify-between">
            {editField ? (
              <div
                id="item_name"
                className={
                  " hover:z-20 hover:opacity-40 hover:cursor-crosshair font-serif capitalize"
                }
                onClick={changeHandler}
              >
                {item.item_name}
              </div>
            ) : (
              <div className={` font-serif capitalize`}>{item.item_name}</div>
            )}

            {editField ? (
              <p
                id="price"
                className={` hover:z-20 hover:opacity-40 hover:cursor-crosshair text-amber-900`}
                onClick={changeHandler}
              >
                ${item.price}
              </p>
            ) : (
              <p className={`text-amber-900`}>${item.price}</p>
            )}
          </div>

          {editField ? (
            <p
              id="item_description"
              className="hover:z-20 hover:opacity-40 w-96 h-24 hover:cursor-crosshair "
              onClick={changeHandler}
            >
              {item.item_description}
            </p>
          ) : (
            <p className="w-96 h-24 ">{item.item_description}</p>
          )}

          <div
            className={`flex gap-1 justify-end text-black font-serif  tracking-wider`}
          >
            <button
              className={`${
                admin ? "pointer-events-none opacity-40 " : ""
              } flex gap-2 px-2 rounded-lg text-center item-center  outline  outline-slate-300`}
              onClick={addHandler}
            >
              Add <p className="text-red-600">+</p>
            </button>
            <div className="flex gap-1 ml-2 rounded-lg text-center item-center  outline outline-2 outline-slate-300">
              <button
                className={`${
                  admin ? "pointer-events-none opacity-40 " : ""
                } mx-2 `}
                onClick={addQuantity}
              >
                +
              </button>
              <p
                className={`${
                  admin ? "pointer-events-none opacity-40 " : ""
                } text-red-600`}
              >
                {quantity}
              </p>
              <button
                className={`${
                  admin ? "pointer-events-none opacity-40 " : ""
                } mx-2 `}
                onClick={removeQuantity}
              >
                -
              </button>
            </div>
            {admin && (
              <>
                {editField ? (
                  <button
                    className="bg-rose-950 text-white px-1 capitalize rounded w-10"
                    onClick={saveHandler}
                  >
                    save
                  </button>
                ) : (
                  <button
                    className="bg-rose-950 text-white px-1 capitalize rounded w-10"
                    onClick={editHandler}
                  >
                    edit
                  </button>
                )}

                <button
                  className="text-red-600 hover:text-rose-950 px-1 text-lg capitalize p-1 rounded"
                  onClick={deleteHandler}
                >
                  {!editField && <MdDelete />}
                  {editField && <MdCancel />}
                  {/* <MdDelete /> */}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
