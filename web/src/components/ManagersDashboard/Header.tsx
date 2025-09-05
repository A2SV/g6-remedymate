import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function ManagerHeader({ children }: { children: ReactNode }) {
    return (
        <div className=" flex-1 h-full w-full bg-white">
            <div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
                <h1>Managers Dashboard</h1>
                <div className="flex gap-4 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>username</p>
                </div>
            </div>
        </div>
    );
}
export default ManagerHeader;
