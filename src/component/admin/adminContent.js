import { useEffect, useState } from "react";
import Card from "../content/card";
import Customize from "./customize";
import useAdmin from "../utils/useAdmin";
import useFetch from "../utils/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/cartSlice";
import { createPortal } from "react-dom";
export default function Admincontent() {
  const fetch = useFetch;
  const dispatch = useDispatch();
  const inventry = useSelector((state) => state.inventry);
  const adminData = useAdmin;
  const [customize, setCustomize] = useState(false);
  const [menuItems, setMenuitems] = useState({
    1: {
      item_image: "coffee4.avif",
      _id: 1,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    2: {
      item_image: "coffee4.avif",
      _id: 2,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    3: {
      item_image: "coffee4.avif",
      _id: 3,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    4: {
      item_image: "coffee4.avif",
      _id: 4,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    5: {
      item_image: "coffee4.avif",
      _id: 5,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    6: {
      item_image: "coffee4.avif",
      _id: 6,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    7: {
      item_image: "coffee4.avif",
      _id: 7,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    8: {
      item_image: "coffee4.avif",
      _id: 8,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    9: {
      item_image: "coffee4.avif",
      _id: 9,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    10: {
      item_image: "coffee4.avif",
      _id: 10,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    11: {
      item_image: "coffee4.avif",
      _id: 11,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
    12: {
      item_image: "coffee4.avif",
      _id: 12,
      item_name: "pizza",
      item_description: "abcd",
      price: "120",
    },
  });

  const customizeButton = () => {
    setCustomize(true);
  };
  useEffect(() => {
    console.log("Re rendered", menuItems);
    const admin = async () => {
      const res = await fetch("http://192.168.1.60:5000/inventory/list");
      setMenuitems(res);
    };
    admin();
  }, [customize]);
  return (
    <>
      {!customize && (
        <div className="mx-auto grid xl:grid xl:grid-cols-2 gap-x-32 gap-y-2">
          {Object.values(menuItems).map((item, i) => {
            return (
              <Card
                item={item}
                setMenu={setMenuitems}
                menu={menuItems}
                key={i}
              />
            );
          })}
          {!customize && (
            <div className="flex justify-center">
              <div
                onClick={customizeButton}
                className="w-16 h-16 outline bg-blue-400 outline-slate-400 outline-2 outline-offset-2 rounded-full flex items-center justify-center text-black hover:cursor-crosshair hover:bg-blue-800 transform transition-transform  hover:scale-200"
              >
                Add item
              </div>
            </div>
          )}
        </div>
      )}
      {customize &&
        createPortal(
          <div className="absolute bg-white left-0 top-0 h-full w-full">
            <Customize setMenu={setMenuitems} customize={setCustomize} />
          </div>,
          document.body
        )}
    </>
  );
}
