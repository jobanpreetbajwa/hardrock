import React, { useEffect, useState } from "react";
import Menucardcontent from "./menuCardcontent";
import Menucardtop from "./menuCardtop";
import Footer from "./footer";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Menuitems() {
  const amount = useSelector((state) => state.cart.total);
  useEffect(() => {
    console.log("render");
  }, [amount]);
  return (
    <>
      <div className="flex justify-center">
        <Menucardtop />
      </div>
      <div className="flex justify-center ">
        {/* <Menucardcontent /> */}
        <Outlet />
      </div>

      <div className="bg-black bg-opacity-95">
        <div className="flex justify-around  text-white uppercase font-light font-serif">
          <Footer />
        </div>
        <div className="border-t-2 text-slate-100 mx-10 h-32 flex justify-center ">
          <div className="flex mt-8">
            <span className="px-6 ">
              <FaFacebook />
            </span>
            <span className="px-6">
              <FaTwitter />
            </span>
            <span className="px-6">
              <FaWifi />
            </span>
            <span className="px-6">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
