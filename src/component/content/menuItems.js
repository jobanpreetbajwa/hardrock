import React, { useState } from "react";
import Menucardcontent from "./menuCardcontent";
import Menucardtop from "./menuCardtop";
import Footer from "./footer";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Outlet } from "react-router-dom";
export default function Menuitems() {
  
  return (
    <>
      <div className="flex justify-center">
        <Menucardtop setMenu />
      </div>
      <div className="flex justify-center h-auto  overflow-auto">
        <Menucardcontent/>
      </div>
      <div className="bg-black bg-opacity-85">
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