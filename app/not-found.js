import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <span className="text-4xl font-bold mb-4">
        The page you are looking for is not found!
      </span>
      <Link href="/">Go Home Page</Link>
    </div>
  );
}
