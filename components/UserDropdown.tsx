"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import NavItems from "./NavItems";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = { name: "John", email: "contact@example.com" };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="flex items-center gap-3 hover:text-yellow-500"
          >
            <Avatar>
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2023/02/07/16/42/vietnamese-woman-7774554_1280.jpg"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
              {user.name}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>
                <div className="py-2 flex relative items-center gap-3">
                <Avatar>
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2023/02/07/16/42/vietnamese-woman-7774554_1280.jpg"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
          <div className="flex flex-col">
            <span>{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
            </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-500"/>
            <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 font-medium focus:bg-transparent focus:text-yellow-500 transition-colors">
                Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-500 sm:hidden"/>
            <nav className="sm:hidden">
                <NavItems/>
            </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
