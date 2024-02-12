import React from "react";

async function useAdmin() {
  let data = null;
  try {
    const res = await fetch("http://192.168.1.60:5000/menu", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    data = await res.json();
  } catch (error) {
    console.log("Error while fetching from backend to admin", Error);
  }

  return data;
}
export default useAdmin;
