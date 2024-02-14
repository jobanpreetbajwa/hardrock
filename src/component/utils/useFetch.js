import React from "react";

async function useFetch(url, token) {
  let data = null;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    data = await res.json();
    const obj = {};

    data.forEach((element) => {
      obj[element["_id"]] = element;
    });
    // console.log(obj);
    data = obj;
  } catch (error) {
    console.log("Error while fetching menu items", error);
  }
  return data;
}

export default useFetch;
