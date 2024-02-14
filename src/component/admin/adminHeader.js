import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../store/cartSlice";
export default function Adminheader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inventry = useSelector((state) => state.inventry);
  const updateListhandler = async () => {
    try {
      const res = fetch("http://192.168.1.60:5000/inventory/add", {
        method: "POST",
        body: JSON.stringify({
          old: inventry.old,
          new: inventry.new,
          deleted: inventry.deleted,
        }),
      });
      if (res.OK) {
        console.log(res.new, "new item added");
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("error while sending data");
    }
    return;
  };
  const logoutHandler = () => {
    dispatch(logIn(""));
    window.sessionStorage.setItem("login", JSON.stringify({}));
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="w-fit uppercase font-serif text-xl font-bold flex tracking-wide gap-2 items-center ">
        <p>Sunrise</p>
        {/* <button
          className="font-serif bg-rose-950 text-white capitalize px-2 py-1 rounded-lg"
          onClick={updateListhandler}
        >
          update
        </button> */}
      </div>
      <button
        onClick={logoutHandler}
        className="uppercase outline outline-1 tracking-wide rounded-lg p-2 hover:bg-rose-950 bg-rose-900 text-white"
      >
        Logout
      </button>
    </>
  );
}
