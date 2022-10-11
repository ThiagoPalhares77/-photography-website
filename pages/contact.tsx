import React from 'react'
import { ContactComponent } from '../components/Contact'
import { Hero } from '../components/Hero'

export default function Contact() {
  return (
    <div>
      <Hero
        heading={'Contato:'}
        message={
          'Preencha o formulário abaixo para questões de trabalho e perguntas.'
        }
      />
      <ContactComponent />
    </div>
  )
}
