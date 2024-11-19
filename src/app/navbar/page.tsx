"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="hover:underline text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline text-lg">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:underline text-lg">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/footer">
              <span className="hover:underline text-lg">Footer</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* Main Content */}
    <main className="p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
        Welcome to the Navbar Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <button
          onClick={() => router.push("/about")}
          className="group relative overflow-hidden bg-emerald-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-emerald-600 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative z-10">Go to About Page</span>
        </button>
        <button
          onClick={() => router.push("/footer")}
          className="group relative overflow-hidden bg-indigo-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-indigo-600 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative z-10">Go to Footer Page</span>
        </button>
        <button
          onClick={() => router.push("/contact")}
          className="group relative overflow-hidden bg-pink-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-pink-600 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative z-10">Go to Contact Page</span>
        </button>
        <button
          onClick={() => router.push("/navbar")}
          className="group relative overflow-hidden bg-yellow-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-yellow-600 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span className="relative z-10">Go to Navbar Page</span>
        </button>
      </div>
    </div>
  </main>
    
  </div>
  );
}