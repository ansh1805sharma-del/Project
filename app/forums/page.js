import React from 'react'
import Link from "next/link"; 


const topics = [
  
  
    {
    id: 1,
    slug: "general-discussion",
    title: "💬 General Discussion",
    description: "Talk about anything and everything with the community.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    slug: "tech-gadgets",
    title: "📰 Tech & Gadgets",
    description: "Discuss the latest technology, apps, and gadgets.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    slug: "gaming-zone",
    title: "🎮 Gaming Zone",
    description: "Share your favorite games, tips, and gaming news.",
    color: "from-green-500 to-lime-500",
  },
  {
    id: 4,
    slug: "movies-tv",
    title: "🎥 Movies & TV",
    description: "Chat about movies, series, and recommendations.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    slug: "music-artists",
    title: "🎵 Music & Artists",
    description: "Discuss your favorite songs, albums, and artists.",
    color: "from-pink-500 to-yellow-500",
  },
  {
    id: 6,
    slug: "travel-lifestyle",
    title: "🌍 Travel & Lifestyle",
    description: "Share travel experiences, food, and lifestyle tips.",
    color: "from-indigo-500 to-violet-500",
  },
];
const Forums = () => {
  // export default function Forums() {
    return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 text-center text-white shadow-md">
        <h1 className="text-5xl font-extrabold">Chit-Chat Forums</h1>
        <p className="mt-3 text-lg">Join conversations. Share your thoughts. Meet new people.</p>
      </header>

      {/* Topics Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Popular Topics</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/forum/${topic.slug}`}>
            <div
              key={topic.id}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${topic.color} text-white hover:scale-105 transition transform cursor-pointer`}
              >
              <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
              <p className="text-sm">{topic.description}</p>
            </div>
                </Link>

            
          ))}
  
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400">
        <p>© {new Date().getFullYear()} Chit-Chat. All Rights Reserved.</p>
      </footer>
    </div>
  );
}








export default Forums