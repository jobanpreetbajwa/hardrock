import { useEffect, useState } from "react";
import Card from "../content/card";
import Customize from "./customize";
import useAdmin from "../utils/useAdmin";
import useFetch from "../utils/useFetch";
export default function Admincontent() {
  const fetch = useFetch;
  const adminData = useAdmin;
  const [customize, setCustomize] = useState(false);
  const [menuItems, setMenuitems] = useState([]);
  const arr = {
    1: {
      id: 1,
      name: "pizza",
    },
    2: {
      id: 2,
      name: "pizza",
    },
    3: {
      id: 3,
      name: "pizza",
    },
    4: {
      id: 4,
      name: "pizza",
    },
    5: {
      id: 5,
      name: "pizza",
    },
    6: {
      id: 6,
      name: "pizza",
    },
    7: {
      id: 7,
      name: "pizza",
    },
    8: {
      id: 8,
      name: "pizza",
    },
    9: {
      id: 9,
      name: "pizza",
    },
    10: {
      id: 10,
      name: "pizza",
    },
    11: {
      id: 11,
      name: "pizza",
    },
    12: {
      id: 12,
      name: "pizza",
    },
  };
  const data = Object.values(arr);
  const customizeButton = () => {
    setCustomize(true);
  };
  useEffect(() => {
    const admin = async () => {
      const res = await fetch("http://192.168.1.60:5000/menu");
      setMenuitems(res);
    };
    admin();
    localStorage.setItem("all", JSON.stringify(arr));
  }, [arr]);
  return (
    <>
      <div className="mx-auto grid md:grid md:grid-cols-2 gap-x-8 gap-y-2">
        {data.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
        {!customize && (
          <div className="flex justify-center">
            <div
              onClick={customizeButton}
              className="w-12 h-12 outline outline-slate-400 outline-2 outline-offset-2 rounded-full flex items-center justify-center text-black hover:cursor-crosshair transform transition-transform  hover:scale-200"
            >
              +
            </div>
          </div>
        )}
        {customize && <Customize menu={setMenuitems} />}
      </div>
    </>
  );
}
