import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex my-16 ">
        <div className="flex flex-col justify-center px-2">
          <img src="hardrockFooter.png" className="rounded h-16"></img>
        </div>
        <div className="py-1 px-2">
          <p>weebly theme</p>
          <p>Pre-sales faqs</p>
          <p>submit a ticket</p>
        </div>
        <div className="py-1 px-2">
          <p>Service</p>
          <p>Theme tweak</p>
        </div>
        <div className="py-1 px-2">
          <p>Showcase</p>
          <p>widget kit</p>
          <p>support</p>
        </div>
        <div className="py-1 px-2">
          <p>About us</p>
          <p>contact us</p>
          <p>affiliates</p>
          <p>resources</p>
        </div>
      </div>
    </>
  );
}
