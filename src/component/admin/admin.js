
import Admincontent from "./adminContent";
import Adminheader from "./adminHeader";

export default function Admin(){
    return<>
        <div className="flex flex-col gap-4">
            <div className="p-4 flex justify-center ">
                <Adminheader/>
            </div>
            <div className="p-4 flex justify-center">
                <Admincontent/>
            </div>
        </div>
    </>
}