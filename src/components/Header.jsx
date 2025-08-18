"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-3 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            <li className="relative aspect-video">
              <Image
                alt="logo"
                src={"/images/logo.png"}
                className="object-contain"
                width={40}
                height={40}
              />
            </li>
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
<<<<<<< HEAD

=======
>>>>>>> fix resposive mobile bugs
          <li>
            {user ? (
              <Link
                href="/profile"
<<<<<<< HEAD
                className="flex items-end justify-center gap-1 text-primary-600"
              >
                <span className="text-xs text-secondary-500">{user.name}</span>
                <UserCircleIcon className="w-6 h-6 " />
=======
                className="flex flex-col items-end justify-center gap-1 text-primary-600"
              >
                <UserCircleIcon className="w-6 h-6 " />
                <span className="text-xs text-secondary-500">{user.name}</span>
>>>>>>> fix resposive mobile bugs
              </Link>
            ) : (
              <Link href="/signin">ورود</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
