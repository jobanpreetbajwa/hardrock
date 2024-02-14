import React from "react";

async function useLoginrequest(email, password, isAdmin) {
  let res = null;
  try {
    res = await fetch("http://192.168.1.60:5000/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        isAdmin,
      }),
    });
    console.log(res);
    // data = await res.json();
  } catch (error) {
    console.log("Error while login to backend", Error);
  }

  return res;
}
export default useLoginrequest;
