"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import SignInOut from "./auth/SignInOut";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-[40px] w-[125px] " />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>

          <li className="py-2">
            <Link
              className={`link ${pathname === "/recipes" ? "active" : ""}`}
              href="/recipes"
            >
              Recipe
            </Link>
          </li>

          <li className="py-2">
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              About
            </Link>
          </li>

          <li className="py-2 ">
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
