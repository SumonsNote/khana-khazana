"use client";
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
        setLoading(false);
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
        <label htmlFor="email">Email Address</label>
        <input required type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input required type="password" name="password" id="password" />
      </div>
      <div className="my-2 text-red-500">{error}</div>

      <button
        type="submit"
        class="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
}
