import React from 'react'
import Swiper from 'react-id-swiper'
import { Container, Row, Col } from 'reactstrap'
import 'react-id-swiper/src/styles/scss/swiper.scss'
import './hero-backgrounds.css'

const HomeHero = () => (
  <section className="hero hero-home">
    {/*<Swiper*/}
    {/*navigation={{*/}
    {/*nextEl: '.swiper-button-next',*/}
    {/*prevEl: '.swiper-button-prev',*/}
    {/*}}*/}
    {/*containerClass="swiper-container hero-slider swiper-container-horizontal"*/}
    {/*pagination={{ el: '.swiper-pagination', clickable: true }}*/}
    {/*>*/}
    <div className="hero-content has-overlay-dark hero-image-1">
      <Container>
        <Row>
          <Col lg={8}>
            <h1>
              Empowering Research
              <br />
              At Scale
            </h1>
            <p className="hero-text pr-5">
              Beocat is a High-Performance Computing (HPC) cluster at Kansas
              State University run by the Institute for Computational Research.
            </p>
            <p className="hero-text pr-5">
              Access is available to any educational researcher in the state of
              Kansas (and their colaborators) without cost. Priority access is
              given to those researchers who have contributed resources.
            </p>
            <div className="CTAs">
              <a
                href="https://account.beocat.ksu.edu/"
                className="btn btn-primary"
              >
                Get an Account
              </a>
              <a
                href="https://support.beocat.ksu.edu/"
                className="btn btn-outline-light"
              >
                Support
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/*</Swiper>*/}
  </section>
)

export default HomeHero
