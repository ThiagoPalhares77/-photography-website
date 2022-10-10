import React from 'react'
import Img1 from '../public/img1.jpeg'
import Img2 from '../public/img2.jpeg'
import Img3 from '../public/img3.jpeg'
import Img4 from '../public/img4.jpeg'
import Img5 from '../public/img5.jpeg'
import Img6 from '../public/img6.jpeg'
import { InstagramImg } from './Instagramimg'

export const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Meu Instagram</p>
      <p className="pb-4">@Instagram</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={Img1} />
        <InstagramImg socialImg={Img2} />
        <InstagramImg socialImg={Img3} />
        <InstagramImg socialImg={Img4} />
        <InstagramImg socialImg={Img5} />
        <InstagramImg socialImg={Img6} />
      </div>
    </div>
  )
}
