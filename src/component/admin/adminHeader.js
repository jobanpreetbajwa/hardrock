import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

export default function Adminheader(){
    const selector = useSelector(state=>state.inventry)
    const updateListhandler = ()=>{
        console.log("send updated list to backend")
        console.log(selector)
    }
    return <>
        <div className="w-fit uppercase font-serif font-bold flex flex-col gap-2">
            <div>
            Sunrise
            </div>
            <button className="font-serif bg-rose-950 text-white capitalize px-2 py-1 rounded-lg"
                onClick={updateListhandler}>
                update
            </button>
        </div>
    </>
}