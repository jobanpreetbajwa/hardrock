import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Menucardhrefp() {
  return (
    <>
      <div className="flex ">
        <ul className="flex justify-around font-serif  ">
          <Link
            to="/menu"
            className="mx-2  rounded-lg outline  outline-slate-300 px-2  "
          >
            All
          </Link>
          <Link
            to="breakfast"
            className="mx-2  rounded-lg outline  outline-slate-300 px-2 "
          >
            breakfast
          </Link>
          <Link
            to="lunch"
            className="mx-2  rounded-lg outline  outline-slate-300 px-2 "
          >
            lunch
          </Link>
          <Link
            to="shakes"
            className="mx-2  rounded-lg outline  outline-slate-300 px-2 "
          >
            shakes
          </Link>
        </ul>
      </div>
    </>
  );
}
