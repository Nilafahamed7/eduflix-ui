import React from "react";
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"

const Successfull = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-5">
        <h1 className="text-3xl font-bold mb-10">Netflix</h1>
        <nav className="space-y-6">
          <p className="hover:text-red-500 cursor-pointer">Dashboard</p>
          <p className="hover:text-red-500 cursor-pointer">My List</p>
          <p className="hover:text-red-500 cursor-pointer">Trending</p>
          <p className="hover:text-red-500 cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Welcome Back,</h2>
          <img
            src="https://i.pravatar.cc/40"
            alt="User avatar"
            className="rounded-full"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Total Watch Hours</h3>
            <p className="text-3xl font-bold text-red-600">120 hrs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Favourite Genre</h3>
            <p className="text-3xl font-bold text-red-600">Action</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Movies Watched</h3>
            <p className="text-3xl font-bold text-red-600">35</p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Recently Watched</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black rounded-lg overflow-hidden h-48">
              <img src={m1} alt="movie" className="w-full h-full object-contain" />
            </div>
            <div className="bg-black rounded-lg overflow-hidden h-48">
              <img src={m2} alt="movie" className="w-full h-full object-contain" />
            </div>
            <div className="bg-black rounded-lg overflow-hidden h-48">
              <img src={m3} alt="movie" className="w-full h-full object-contain" />
            </div>
            <div className="bg-black rounded-lg overflow-hidden h-48">
              <img src={m4} alt="movie" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Successfull;
