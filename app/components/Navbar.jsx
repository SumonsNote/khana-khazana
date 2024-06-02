import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import SignInOut from "./auth/SignInOut";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-[40px] w-[125px] " />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/recipes">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="about">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
