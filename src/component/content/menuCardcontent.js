import React, { useEffect, useState } from "react";
import Card from "./card";
import useFetch from "../utils/useFetch";
import { useSelector } from "react-redux";
import dummy from "../dummy";

export default function Menucardcontent() {
  const token = useSelector((state) => state.logged.token);
  const fetch = useFetch;
  const [menuData, setMenudata] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      const data = await fetch("http://192.168.1.60:5000/users/list", token);
      setMenudata(Object.values(data));
    };
    setMenudata(dummy);
    fetchAll();
  }, []);
  return (
    <>
      <div className="mx-auto grid 2xl:grid 2xl:grid-cols-2 gap-x-16 gap-y-2 overflow-scroll">
        {menuData.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </>
  );
}
