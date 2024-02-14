import Admincontent from "./adminContent";
import Adminheader from "./adminHeader";

export default function Admin() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="p-1 flex justify-between ml-24 mt-4 pb-0 mr-24">
          <Adminheader />
        </div>
        <div className="p-4 flex justify-center">
          <Admincontent />
        </div>
      </div>
    </>
  );
}
