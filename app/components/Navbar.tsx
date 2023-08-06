"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-800 text-white h-14 flex justify-center items-center gap-8">
      <Link
        href="/blog"
        className={pathname == "/blog" ? "text-blue-300 underline" : ""}
      >
        Blog
      </Link>
      <Link
        href="/users"
        className={pathname == "/users" ? "text-blue-300 underline" : ""}
      >
        Users
      </Link>
    </nav>
  );
}
