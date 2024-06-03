"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInOut() {
  const { auth, setAuth } = useAuth();

  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="mx-1">Hello, {auth?.firstName}</span>

          <a
            className="cursor-pointer bg-[#eb4a36] py-2 px-6 rounded-md text-white content-center"
            onClick={logout}
          >
            Logout
          </a>
        </>
      ) : (
        <Link
          className="bg-[#eb4a36] px-6 rounded-md text-white content-center py-2"
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
}
