"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "mdzainulkhan@gmail.com" && password === "123456") {
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <section className="bg-[#101828] min-h-screen flex items-center">

      <div className="mx-auto w-100 rounded-lg shadow p-8 max-w-lg bg-[#1e293980] border-2 border-[#ffffff1a]">
        <div className="flex justify-center mb-4">
          <Image src={"https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"} alt="logo" width={50} height={100} />
        </div>
        <h1 className="text-white text-center mb-10 text-2xl font-bold">Sign in to your Dashboard</h1>
        <form onSubmit={handleLogin}>

          <div className="mb-6">
            <label htmlFor="email" className="text-white font-medium">
              Email address
            </label>
            <input
              id="email"
              type="text"
              className="block rounded-md border border-gray-300 py-2 px-4 my-2 shadow-sm w-full text-white bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-white font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block rounded-md border border-gray-300 py-2 px-4 my-2 shadow-sm w-full text-white bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-[#615fff] py-2 rounded text-white my-2 px-4 w-full cursor-pointer hover:opacity-[.8] transition"
          >
            Sign in
          </button>

        </form>
      </div>
    </section>
  );
}
