import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function Forgetpassword() {
  useEffect(() => {
    const forget = async () => {
      try {
        const email = prompt("enter your email");
        const res = await fetch(
          "http://192.168.1.60:5000/forgot-password/verify-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        if (!res.ok) {
          alert(" Invalid user! ");
        }
      } catch (error) {
        console.log("Error while reseting password", error);
      }
    };
    forget();
  });
  // return (
  //   <div className="flex justify-center h-16">
  //     {/* <ToastContainer
  //       toastStyle={{ fontSize: "14px", width: "200px", height: "100px" }}
  //     /> */}
  //   </div>
  // );
}
