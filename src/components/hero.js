import React from 'react'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/scss/swiper.scss'

const Hero = () => (
  <section className="hero hero-home">
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
    >
      <div>
        <p>Testing 123</p>
      </div>

      <div>
        <p>Testing 456</p>
      </div>
    </Swiper>
  </section>
)

export default Hero
