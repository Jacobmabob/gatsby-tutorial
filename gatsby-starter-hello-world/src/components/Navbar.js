import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <>
    <nav>
        <Link to="/home"></Link>
        <Link to="/about"></Link>
        <Link to="/contact"></Link>
        <Link to="/explore"></Link>
    </nav>
    </>
  )
}

export default Navbar