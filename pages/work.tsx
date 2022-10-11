import React from 'react'
import { Hero } from '../components/Hero'
import { Porftolio } from '../components/Portfolio'

export default function work() {
  return (
    <div>
      <Hero
        heading={'Meus trabalhos'}
        message={
          'Aqui estão alguns de meus recentes trabalhos ao redor do mundo'
        }
      />
      <Porftolio />
    </div>
  )
}
