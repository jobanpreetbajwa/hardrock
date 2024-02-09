import React from "react";

async function Useloginrequest(email, password, is_Admin) {
  let data = null;
  try {
    const res = await fetch("http://192.168.1.60:5000/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(res);
    data = await res.json();
  } catch (error) {
    console.log("Error while login to backend", Error);
  }

  return data;
}
export default Useloginrequest;
