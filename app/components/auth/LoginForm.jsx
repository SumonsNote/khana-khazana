"use client";
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { setAuth } = useAuth();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError(`Please provide a valid email and password`);
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <form class="login-form" onSubmit={onSubmit}>
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="my-2 text-red-500">{error}</div>

      <button
        type="submit"
        class="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
    </form>
  );
}
