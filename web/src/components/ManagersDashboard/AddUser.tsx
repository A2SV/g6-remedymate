import { Button } from "../ui/button";
import { Input } from "../ui/input";
export default function Footer() {
    return (
        <div className=" w-full bg-white rounded">
            <h3 className="text-bold text-lg pl-5 pt-5">Quick Add User</h3>
            <p className="pl-5">Create a user with minimal fields. You can enrich details later.</p>
            <div className="flex gap-5 px-4 py-3 ">
                <Input type="text" placeholder="Full Name" className="flex border rounded h-12 w-100 px-2 shadow-sm text-bold"/>
                <Input type="text" placeholder="Email" className="flex border rounded h-12 w-100 px-2 shadow-sm text-bold"/>
                <Input type="text" placeholder="Role" className="flex border rounded h-12 w-100 px-2 shadow-sm text-bold"/>
            </div>
            <div className="px-3 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
            <div className="flex gap-5 ml-220">
                <button className="mt-3  bg-amber-500 hover:bg-amber-400 h-10 w-20 rounded">Clear</button>
                <button className="mt-3  bg-amber-500 hover:bg-amber-400 h-10 w-20 rounded">Add User</button>
            </div> 
        </div>
        </div>
    );
}