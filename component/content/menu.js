import React from "react";
import "../../index.css";
import Menuheader from "./menuHeader";
import Menuitems from "./menuItems";
export default function Menu() {
  return (
    <>
      <div className="block">
        <div className="flex flex-col gap-1">
          <Menuheader />
          <Menuitems />
        </div>
      </div>
    </>
  );
}
