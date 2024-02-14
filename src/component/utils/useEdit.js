import React from "react";

async function useEdit(obj, id) {
  try {
    let res = await fetch(`http://192.168.1.60:5000/inventory/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: obj,
    });
    if (res.ok) {
      alert("successfully added");
    } else {
      alert(`fail to updated ${(id, obj.item_name)}`);
    }
  } catch (error) {
    console.log("error while updating data in useEdit", error);
  }
}

export default useEdit;
