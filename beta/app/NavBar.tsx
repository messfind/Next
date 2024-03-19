import React from 'react'
import Link from "next/link"
import { FaWolfPackBattalion } from "react-icons/fa";
import Links from '@/components/navbar/lonks/Links';
Links
const NavBar = () => {
  return (
    <nav className='bg-[#0400ff]'>

      <Links/>
          <Link href="/"><FaWolfPackBattalion/></Link>

    </nav>
  )
}

export default NavBar
