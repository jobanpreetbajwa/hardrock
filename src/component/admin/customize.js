import { useEffect, useState } from "react";
import Card from "../content/card";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setNewdata } from "../store/cartSlice";
export default function Customize({setMenu,customize}) {
const dispatch  = useDispatch()
const [url,setUrl] = useState("")
const [item_name,setItem_name] = useState("")
const [item_description,setItem_description] = useState("")
const [price,setPrice] = useState("")

 const submitHandler =()=>{
  let obj={}
  let item_id=""
    setMenu((prev)=>{
     item_id = nanoid()
     obj ={url,item_id,item_name,price,item_description}
      return{...prev,item_id:obj}
    })
    dispatch(setNewdata(obj))
    customize(false)
  }

  return<form onSubmit={submitHandler} className="flex flex-col items-center gap-4 capitalize font-bold font-serif
    " >
      <label >img Url :</label>
      <input type="text" className="w-max outline" onBlur={(e)=>{setUrl(e.target.value)}}/>
      
      <label>Item name :</label>
      <input type="text" className="w-max outline" onBlur={(e)=>{setItem_name(e.target.value)}}/>
      
      <label>item price :</label>
      <input type="number" className="w-max outline" onBlur={(e)=>{setPrice(e.target.value)}}/>
      
      <label>item description :</label>
      <textarea type="text" className="w-max outline" onBlur={(e)=>{setItem_description(e.target.value)}}/>
      <div className="flex gap-2 justify-evenly">
      <button type="submit" className="bg-rose-950 px-3 py-1 rounded-lg mt-3 text-white" >Add item</button>
      <button className="bg-rose-950 px-3 py-1 rounded-lg mt-3 text-white" onClick={()=>{customize(false)}}>back</button>
      </div>
    </form>

}
