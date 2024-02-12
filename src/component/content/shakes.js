import { useState, useEffect } from "react";
import React from "react";
import Card from "./card";
import useFetch from "../utils/useFetch";
export default function Shakes() {
  const fetch = useFetch;
  const [menuData, setMenudata] = useState([1]);
  // const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  useEffect(() => {
    const fetchAll = async () => {
      const data = await fetch("http://192.168.1.60:5000/users/shakes");
      setMenudata(Object.values(data));
    };
    fetchAll();
  }, []);
  return (
    <>
      <div className="flex flex-col ">
        {menuData.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </>
  );
}
