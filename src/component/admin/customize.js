import { useEffect, useState } from "react";
import Card from "../content/card";
export default function Customize(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const price = prompt("add price ?");
    const image = prompt("add image url");
    const discription = prompt("add description");
    const obj = { price, image, discription };
    setItems(items.push(obj));
    const sendItem = async () => {
      try {
        let res = await fetch("http://192.168.1.60:5000/menu/update");
        console.log("updated");
        res = await res.json();
        props.setItems(res);
      } catch (error) {
        console.log("error while updating menu", error);
      }
    };
  }, []);
  return (
    <>
      {/* {items.map((items, i) => {
        return <Card item={items} key={i} />;
      })}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <button
            onClick={addItem}
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white hover:cursor-crosshair"
          >
            Add img
          </button>
          <p className="flex items-center">{item.price}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p>{item.content}</p>
          <button className="bg-blue-400 rounded-lg" onClick={addItem}>
            Add item
          </button>
        </div>
      </div> */}
    </>
  );
}
