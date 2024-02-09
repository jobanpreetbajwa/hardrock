import React from "react";

async function Usefetch(url) {
  let data = null;
  try {
    const res = await fetch("http://192.168.1.115:8000/inventory/list/", {
      method: "GET",
    });
    data = await res.json();
  } catch (error) {
    console.log("Error while fetching menu items", error);
  }
  return data;
}

export default Usefetch;
