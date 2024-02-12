import React, { useEffect, useState } from "react";
import Card from "./card";
import Usefetch from "../utils/useFetch";

export default function Menucardcontent() {
  const [menuData, setMenudata] = useState([]);
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  useEffect(() => {
    const fetch = async () => {
      const data = await Usefetch();
      setMenudata(data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="flex flex-col ">
        {items.map((item,i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </>
  );
}
