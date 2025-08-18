"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/ui/ButtonIcon";

function SideBar({ onClose, children }) {
  return (
<<<<<<< HEAD
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 mt-10 lg:pt-8">
=======
    <div className="overflow-y-auto md:flex  flex-col p-5 h-screen pt-10 mt-10 lg:pt-8">
>>>>>>> fix resposive mobile bugs
      {/* SideBar header */}
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 
       "
        >
          <HomeIcon className="w-6 h-6" />
          <span>خانه</span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>

      {/* SideBar content */}
      <div className="overflow-y-auto flex-auto">{children}</div>
    </div>
  );
}
export default SideBar;
