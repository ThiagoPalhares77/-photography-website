import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={'/'}>
          <h1 className="font-bold text-4xl ">Logo</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 ">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="p-4 ">
            <Link href={'/#gallery'}>Galeria</Link>
          </li>
          <li className="p-4 ">
            <Link href={'/portfolio'}>Trabalhos</Link>
          </li>
          <li className="p-4 ">
            <Link href={'/contact'}>Contato</Link>
          </li>
        </ul>

        {/* MOBILE  */}
        <div className="block sm:hidden z-10 ">
          <AiOutlineMenu scale={20} />
        </div>

        {/* MOBILE MENU */}

        <div className="sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300">
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/#gallery'}>Galeria</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/portfolio'}>Trabalhos</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/contact'}>Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
