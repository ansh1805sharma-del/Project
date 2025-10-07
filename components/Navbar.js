// components/Navbar.js
"use client"; // only needed if you're on Next.js 13+ with app directory

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const User = useUser()
console.log(User.user?.id)
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold text-blue-400">
           Chit-chat
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/forums" className="hover:text-blue-400">
              Forums
            </Link>
            {/* <Link href="/services" className="hover:text-blue-400">
              Services
              </Link> */}
            <Link href="/chat" className="hover:text-blue-400">
              UserChat
            </Link>
              <UserButton/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              // onClick={() => setIsOpen(!isOpen)}
              // className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
            

              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-400">
            About
          </Link>
          {/* <Link href="/services" className="block hover:text-blue-400">
            Services
          </Link> */}
          <Link href="/contact" className="block hover:text-blue-400">
            Contact
          </Link>
          </div>
      )}
    </nav>
  );
}
