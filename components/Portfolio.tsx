import Image from 'next/image'
import React from 'react'

export const Porftolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Fotos:</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
            alt={''}
            layout="responsive"
            width={677}
            height={451}
          />
        </div>
        <div className="w-hull h-full">
          <Image
            src={
              'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
            alt={''}
            layout="responsive"
            width={215}
            height={217}
            objectFit={'cover'}
          />
        </div>
        <div className="w-hull h-full">
          <Image
            src={
              'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            alt={''}
            layout="responsive"
            width={215}
            height={217}
            objectFit={'cover'}
          />
        </div>
        <div className="w-hull h-full">
          <Image
            src={
              'https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
            }
            alt={''}
            layout="responsive"
            width={215}
            height={217}
            objectFit={'cover'}
          />
        </div>
        <div className="w-hull h-full">
          <Image
            src={
              'https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
            }
            alt={''}
            layout="responsive"
            width={215}
            height={217}
            objectFit={'cover'}
          />
        </div>
        <div className="w-hull h-full">
          <Image
            src={
              'https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80'
            }
            alt={''}
            layout="responsive"
            width={215}
            height={217}
            objectFit={'cover'}
          />
        </div>
      </div>
    </div>
  )
}
