import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link href={'/'}>
          <h1>Logo</h1>
        </Link>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/#gallery'}>Galeria</Link>
          </li>
          <li>
            <Link href={'/portfolio'}>Trabalhos</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contato</Link>
          </li>
        </ul>

        {/* MOBILE  */}
        <div>
          <AiOutlineMenu scale={20} />
        </div>

        {/* MOBILE MENU */}

        <div>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/#gallery'}>Galeria</Link>
            </li>
            <li>
              <Link href={'/portfolio'}>Trabalhos</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
