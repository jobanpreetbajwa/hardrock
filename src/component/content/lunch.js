import { useState, useEffect } from "react";
import React from "react";
import Card from "./card";
import useFetch from "../utils/useFetch";
import dummy from "../dummy";
export default function Lunch() {
  const fetch = useFetch;
  const [menuData, setMenudata] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const data = await fetch("http://192.168.1.60:5000/users/lunch");
      setMenudata(Object.values(data));
    };
    setMenudata(dummy);
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
