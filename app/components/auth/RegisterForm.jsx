"use client";

import { registerUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      const data = await registerUser(formData);

      router.push("/login");
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form class="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input required type="text" name="firstName" id="fname" />
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input required type="text" name="lastName" id="lname" />
      </div>
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
        {loading ? "Creating account" : "Create Account"}
      </button>
    </form>
  );
}
