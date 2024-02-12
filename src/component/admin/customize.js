import { useState } from "react"

export default function Customize(){
    const [item,setItem] = useState({
        img:"",
        price:"$120",
        content:"description"
    })
    const addItem = ()=>{
        console.log("additem to store")
    }
    return<>
    <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between">
                <button onClick={addItem}
                className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white hover:cursor-crosshair">
                    Add img
                </button>
                <p className="flex items-center">
                   {item.price}
                </p>
            </div>
            <div className="flex flex-col items-center ">
                <p>
                   {item.content}
                </p>
                <button className="bg-blue-400 rounded-lg" onClick={addItem}>Add item</button>
            </div>
        </div>
    </>
}