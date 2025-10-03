import React from "react"
import Navbar from "./components/Navbar"
import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-24 flex flex-col items-center justify-center">
        <div className="text-center max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Welcome to MERN Auth
          </h1>
          <p className="text-lg text-gray-600">
            A simple authentication app built with React, Tailwind CSS, Node.js, and MongoDB.
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
            >
              Signup
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
