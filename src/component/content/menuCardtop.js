import React from "react";
import { NavLink,Link } from "react-router-dom";
export default function Menucardhrefp(props) {
  return (
    <>
      <div className="flex ">
        <ul className="flex justify-around font-serif  ">
          <a href="/menu" className="mx-2 outline rounded-lg outline  outline-slate-300 px-1 px-2 outline-rose-950 ">
            All
          </a>
          <a href="/breakfast" className="mx-2 outline rounded-lg outline  outline-slate-300 px-1 px-2 outline-rose-950">
            breakfast
          </a>
          <a href="lunch" className="mx-2 outline rounded-lg outline  outline-slate-300 px-1 px-2 outline-rose-950">
            lunch
          </a>
          <a href="shakes" className="mx-2 outline rounded-lg outline  outline-slate-300 px-1 px-2 outline-rose-950">
            shakes
          </a>
        </ul>
      </div>
    </>
  );
}
