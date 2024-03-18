import React from 'react'
import Link from "next/link"
import { FaWolfPackBattalion } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className='flex space-x-5 border-b px-5'>

          <Link href="/"><FaWolfPackBattalion/></Link>
          <ul className='flex space-x-4 hover:text-red-950'>
              <li>
                  <Link href="/">Dashboard</Link>
              </li>
              <li>
                  <Link href="/issue">Issue</Link>
              </li>
            </ul>

    </nav>
  )
}

export default NavBar
