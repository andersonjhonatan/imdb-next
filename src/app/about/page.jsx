'use client'
import AboutComponent from '@/components/AboutComponent'
import React from 'react'
import { ImHome } from 'react-icons/im'

function AboutPage() {
  return (
    <div>
      <AboutComponent
        title1="Bem-vindo ao nosso IMDb Clone, o seu refúgio digital para uma experiência cinematográfica única! Nosso site foi meticulosamente projetado para proporcionar a você uma jornada envolvente pelo vasto mundo do cinema. Embora atualmente estejamos focados na visualização de informações, estamos trabalhando incessantemente nos bastidores para oferecer em breve funcionalidades de interação e compartilhamento"
        title2="O propósito principal do nosso site é proporcionar a você uma plataforma intuitiva e abrangente para explorar filmes de maneira detalhada. Navegue por uma extensa coleção de obras cinematográficas, desde os clássicos intemporais até os lançamentos mais recentes. Descubra informações detalhadas sobre elenco, direção, sinopse e avaliações críticas, tudo apresentado de forma visualmente cativante"
        title3="Embora, atualmente, não seja possível compartilhar diretamente suas descobertas, acreditamos que a verdadeira essência do cinema está na apreciação individual. Use nosso site como seu guia pessoal para a sétima arte, onde cada página é uma janela para a magia cinematográfica. Estamos comprometidos em aprimorar continuamente a experiência do usuário, adicionando em breve funcionalidades de compartilhamento para que você possa compartilhar suas paixões cinematográficas com outros amantes de filmes"
        address="Home"
        Icon={ImHome}
      />
    </div>
  )
}

export default AboutPage