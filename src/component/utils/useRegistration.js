import React from "react";

async function useRegistration(username, email, contact, password) {
  let res = null;
  try {
    res = await fetch("http://192.168.1.60:5000/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        isAdmin: true,
        // loginInfo: { username, email, password, isAdmin: true },
      }),
    });
    // data = await res.json();
  } catch (error) {
    console.log("Error while sending data to backend", Error);
  }

  return res;
}

export default useRegistration;
