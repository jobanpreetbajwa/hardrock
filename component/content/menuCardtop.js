import React from "react";
import { Link } from "react-router-dom";
export default function Menucardtop(props) {
  return (
    <>
      <div className="flex ">
        <ul className="flex justify-around font-serif ">
          <li className="mx-2 outline rounded px-1 outline-2 outline-offset-2 bg-yellow-50">
            <button>All</button>
          </li>
          <li className="mx-2 outline rounded px-1 outline-2 outline-offset-2 bg-yellow-50">
            <button>breakfast</button>
          </li>
          <li className="mx-2 outline rounded px-1 outline-2 outline-offset-2 bg-yellow-50">
            <button>lunch</button>
          </li>
          <li className="mx-2 outline rounded px-1 outline-2 outline-offset-2 bg-yellow-50">
            <button>shakes</button>
          </li>
        </ul>
      </div>
    </>
  );
}
