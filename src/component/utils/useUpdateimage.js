import React from "react";

async function useUpdateimage(id, image) {
  const formData = new FormData();
  formData.append("file", image);
  try {
    let res = await fetch(
      `http://192.168.1.60:5000/inventory/updateImage/${id}`,
      {
        method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        body: formData,
      }
    );
    if (res.ok) {
      alert("successfully added");
    } else {
      alert(`fail to updated image`);
    }
  } catch (error) {
    console.log("error while updating image in useUpdateimage", error);
  }
}

export default useUpdateimage;
