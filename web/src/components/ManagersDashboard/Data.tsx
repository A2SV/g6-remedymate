"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Filter, Columns, ChevronRight, ChevronDown } from "lucide-react";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "../ui/table";
import { useState } from "react";
import {Avatar,AvatarFallback,AvatarImage,} from "../ui/avatar";
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger,} from "../ui/dropdown-menu";

export default function Data() {
  const [role, setRole] = useState("Role");
  const [status, setStatus] = useState("Status");
  const [language, setLanguage] = useState("Language");

  const [openRole, setOpenRole] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <div className="shadow-sm bg-white rounded-md">
      <div className="flex gap-5 px-4 py-3">
        <Input
          type="text"
          placeholder="Search users..."
          className="flex border rounded h-12 w-100 px-2 shadow-sm"
        />

        
        <DropdownMenu onOpenChange={setOpenRole}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-blue-900 text-white rounded h-12 w-40">
              {role}
              {openRole ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setRole("Role: Admin")}>
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRole("Role: Editor")}>
              Editor
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRole("Role: Viewer")}>
              Viewer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      
        <DropdownMenu onOpenChange={setOpenStatus}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-blue-900 text-white rounded h-12 w-40">
              {status}
              {openStatus ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setStatus("Status: Active")}>
              Active
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus("Status: Inactive")}>
              Inactive
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus("Status: Pending")}>
              Pending
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        
        <DropdownMenu onOpenChange={setOpenLanguage}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-blue-900 text-white rounded h-12 w-40">
              {language}
              {openLanguage ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLanguage("Language: English")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("Language: Spanish")}>
              Spanish
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("Language: French")}>
              French
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

  
        <button className="flex items-center gap-2 px-5 shadow-sm bg-yellow-400 text-black rounded-3xl h-12 w-28">
          <Filter size={18} />
          Filters
        </button>
        
        <button className="flex items-center gap-2 px-5 shadow-sm bg-yellow-400 text-black rounded-3xl h-12 w-28">
          <Columns size={18} />
          Columns
        </button>
      </div>

      
      <div className="ml-4 mr-4 shadow-sm bg-white rounded-md overflow-y-auto border-b">
        <Table>
          <TableHeader className="w-full text-left bg-amber-400">
            <TableRow className="h-16 hover:bg-amber-400">
              <TableHead className="w-10">ID</TableHead>
              <TableHead className="w-200">User</TableHead>
              <TableHead className="w-200">Email</TableHead>
              <TableHead className="w-100">Role</TableHead>
              <TableHead className="w-100">Language</TableHead>
              <TableHead className="w-100">Status</TableHead>
              <TableHead className="w-100">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="h-16">
              <TableCell className="w-10">1</TableCell>
              <TableCell className="w-200">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="user1.png" alt="Abebe" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Abebe Bekele</div>
                    <div className="text-sm text-gray-500">Ethiopia</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-200">
                abebe@remedymate.africa
              </TableCell>
              <Button className="mt-3 bg-amber-400 hover:bg-amber-400">Manager</Button>
              <TableCell className="w-40">English</TableCell>
              <TableCell className="w-100">Active</TableCell>
              <Button className="mt-3 bg-amber-500 hover:bg-amber-400 text-white">Edit</Button>
              <Button className="mt-3 ml-3 bg-red-600 hover:bg-red-500 text-white">Delete</Button>
            </TableRow>
            <TableRow className="h-16">
              <TableCell className="w-10">2</TableCell>
              <TableCell className="w-200">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="user2.png" alt="Abebe" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Mulu Habte</div>
                    <div className="text-sm text-gray-500">Kenya</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-200">
                mulu.habte@example.com
              </TableCell>
              <Button className="mt-3 bg-amber-400 hover:bg-amber-400">Admin</Button>
              <TableCell className="w-40">Amharic</TableCell>
              <TableCell className="w-150">Pending</TableCell>
              <Button className="mt-3 bg-amber-500 hover:bg-amber-400 text-white">Edit</Button>
              <Button className="mt-3 ml-3 bg-red-600 hover:bg-red-500 text-white">Delete</Button>
            </TableRow>

            <TableRow className="h-16">
              <TableCell className="w-10">3</TableCell>
              <TableCell className="w-200">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="user3.png" alt="Abebe" />
                    <AvatarFallback>Kw</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Kwame Boateng</div>
                    <div className="text-sm text-gray-500">Ghana</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-200">
                kwame.boateng@example.com
              </TableCell>
              <Button className="mt-3 bg-amber-400 hover:bg-amber-400">Editor</Button>
              <TableCell className="w-40">English</TableCell>
              <TableCell className="w-150">Inactive</TableCell>
              <Button className="mt-3 bg-amber-500 hover:bg-amber-400 text-white">Edit</Button>
              <Button className="mt-3 ml-3 bg-red-600 hover:bg-red-500 text-white">Delete</Button>
            </TableRow>

            <TableRow className="h-16">
              <TableCell className="w-10">4</TableCell>
              <TableCell className="w-200">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="user4.png" alt="Abebe" />
                    <AvatarFallback>Ai</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Aisha Said</div>
                    <div className="text-sm text-gray-500">Tanzania</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-200">
                aisha.said@example.com
              </TableCell>
              <Button className="mt-3 bg-amber-400 hover:bg-amber-400">Viewer</Button>
              <TableCell className="w-40">Swahii</TableCell>
              <TableCell className="w-150">Active</TableCell>
              <Button className="mt-3 bg-amber-500 hover:bg-amber-400 text-white">Edit</Button>
              <Button className="mt-3 ml-3 bg-red-600 hover:bg-red-500 text-white">Delete</Button>
            </TableRow>

            <TableRow className="h-16">
              <TableCell className="w-10">5</TableCell>
              <TableCell className="w-200">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="user5.png" alt="Abebe" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Liya Tesfaye</div>
                    <div className="text-sm text-gray-500">Ethiopia</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-200">
                liya.tesfaye@example.com
              </TableCell>
              <Button className="mt-3 bg-amber-400 hover:bg-amber-400">Manager</Button>
              <TableCell className="w-40">Amharic</TableCell>
              <TableCell className="w-150">Active</TableCell>
              <Button className="mt-3 bg-amber-500 hover:bg-amber-400 text-white">Edit</Button>
              <Button className="mt-3 ml-3 bg-red-600 hover:bg-red-500 text-white">Delete</Button>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="px-3 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
        <p>showing 1-5 of 1,284 users</p>
        <div className="flex gap-5 mr-25">
          <button className="mt-3 bg-amber-500 hover:bg-amber-400 h-10 w-20 rounded">prev</button>
          <button className="mt-3 bg-amber-500 hover:bg-amber-400 h-10 w-20 rounded">next</button>
        </div>
      </div>
    </div>
  );
}
