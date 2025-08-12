import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-pink-400 transition"
      >
        Go Home
      </Link>
    </section>
  )
        }
