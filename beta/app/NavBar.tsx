import React from 'react'
import Link from "next/link"
import { FaWolfPackBattalion } from "react-icons/fa";
import Links from '@/components/navbar/links/Links';
Links
const NavBar = () => {
  return (
    <nav className='bg-[#0400ff] text-justify'>

      <Links/>
          <Link href="/"><FaWolfPackBattalion/></Link>

    </nav>
  )
}

export default NavBar
