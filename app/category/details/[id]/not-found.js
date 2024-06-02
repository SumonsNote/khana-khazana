"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <span className="text-4xl font-bold mb-4">
        The recipe with id <span className="text-slate-400">{id}</span> you are
        looking for is not found!
      </span>
      <Link href="/">Go Home Page</Link>
    </div>
  );
}
