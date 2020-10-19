import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <div style={{ background: '#111' }}>
    <nav>

      <section>
        <Link to="/">Home</Link>
        <Link to="/posts">Joke </Link>
      </section>

    </nav >
  </div>
)
