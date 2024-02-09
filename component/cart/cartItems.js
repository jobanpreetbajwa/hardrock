import React from "react";
import { MdDelete } from "react-icons/md";
export default function Cartitems() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex">
          <img src="hardrock.png" className="rounded-full w-14"></img>
        </div>
        <div className="flex">middle</div>
        <div className="flex mt-1">
          <MdDelete />
        </div>
      </div>
    </>
  );
}
