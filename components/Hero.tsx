import React from 'react'

export const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover photo-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Livro</button>
      </div>
    </div>
  )
}
