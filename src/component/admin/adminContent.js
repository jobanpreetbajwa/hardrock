import { useEffect, useState } from "react";
import Card from "../content/card";
import Customize from "./customize";
import useAdmin from "../utils/useAdmin";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { setData } from "../store/cartSlice";
export default function Admincontent() {
  const fetch = useFetch;
  const dispatch = useDispatch()
  const adminData = useAdmin;
  const [customize, setCustomize] = useState(false);
  const [menuItems, setMenuitems] = useState({
    1: {
      _id: 1,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    2: {
      _id: 2,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    3: {
      _id: 3,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    4: {
      _id: 4,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    5: {
      _id: 5,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    6: {
      _id: 6,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    7: {
      _id: 7,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    8: {
      _id: 8,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    9: {
      _id: 9,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    10: {
      _id: 10,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
    11: {
      _id: 11,
      item_name: "pizza",
      item_description:"abcd"
    },
    12: {
      _id: 12,
      item_name: "pizza",
      item_description:"abcd",
      price:"120"
    },
  });

  const customizeButton = () => {
    setCustomize(true);
  };
  useEffect(() => {
    const admin = async () => {
      const res = await fetch("http://192.168.1.60:5000/menu");
      // setMenuitems(arr);
    };
    admin();
  }, []);
  return (
    <>
      <div className="mx-auto grid md:grid md:grid-cols-2 gap-x-32 gap-y-2">
        {Object.values(menuItems).map((item, i) => {
          return <Card item={item} setMenu={setMenuitems} menu={menuItems} key={i} />;
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
        {customize && <Customize setMenu={setMenuitems} customize={setCustomize} />}
      </div>
    </>
  );
}
