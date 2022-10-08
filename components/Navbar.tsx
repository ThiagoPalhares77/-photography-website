import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#FFF')
        setTextColor('#000')
      } else {
        setColor('transparent')
        setTextColor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 right-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={'/'}>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
            Logo
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
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
        <div onClick={handleNav} className="block sm:hidden z-10 ">
          {nav ? (
            <AiOutlineClose scale={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu scale={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* MOBILE MENU */}

        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
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
