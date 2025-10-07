// import { Main } from "next/document";
import Image from "next/image";

import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide">Chit-Chat</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-yellow-300 transition">
            Features
          </a>
          <a href="#about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#download" className="hover:text-yellow-300 transition">
            Download
          </a>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Connect. Chat. <br /> 
            <span className="text-yellow-300">Anytime, Anywhere.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-md">
            Chit-Chat makes conversations simple, fast, and fun. Stay connected
            with friends, family, and teams—wherever you are.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#download"
              className="px-6 py-3 rounded-full bg-yellow-400 text-purple-900 font-semibold shadow-lg hover:bg-yellow-300 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side - Fancy illustration */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
            alt="Chat Illustration"
            className="w-80 md:w-[28rem] drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Why Chit-Chat?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-3">⚡ Real-time Messaging</h4>
              <p>Instantly connect with anyone with blazing fast messaging.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-3">🔒 Secure & Private</h4>
              <p>Your chats are encrypted, keeping your conversations safe.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-3">🌍 Connect Anywhere</h4>
              <p>Stay in touch with friends, family, or your team globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Chit-Chat. All rights reserved.</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Home - chitchat',
  description: 'Chitchat is a new chat app',
}
