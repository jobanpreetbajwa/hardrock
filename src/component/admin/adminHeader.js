import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Adminheader() {
  const navigate = useNavigate();
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
  return (
    <>
      <div className="w-fit uppercase font-serif font-bold flex flex-col gap-2">
        <div>Sunrise</div>
        <button
          className="font-serif bg-rose-950 text-white capitalize px-2 py-1 rounded-lg"
          onClick={updateListhandler}
        >
          update
        </button>
      </div>
    </>
  );
}
