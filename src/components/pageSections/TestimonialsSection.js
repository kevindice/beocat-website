import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import { Container, Row, Col } from 'reactstrap'
// import 'react-id-swiper/src/styles/scss/swiper.scss'

const testimonials = [
  {
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    img: 'img/avatar.jpg',
    name: 'Name 123',
    title: '',
  },
]

const TestimonialsSection = () => (
  <section className="testimonials">
    <Container className="text-center">
      <header>
        <h2>
          <small>User Feedback</small>
          Researcher Testimonials
        </h2>
      </header>
      <Swiper
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }}
        rebuildOnUpdate={true}
        pagination={{
          el: '.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-bullets-dynamic'
        }}
        containerClass="swiper-container testimonials-slider swiper-container-horizontal"
      >
        {testimonials.map(slide => (
          <div className="swiper-slide">
            <div className="testimonial">
              <Row>
                <p className="feedback col-lg-8 mx-auto">{slide.quote}</p>
              </Row>
              <div className="user d-flex align-items-center justify-content-center">
                <div className="avatar">
                  <img src={slide.img} alt={slide.name} className="img-fluid" />
                </div>
                <div className="title">
                  <strong className="text-uppsercase">{slide.name}</strong>
                  <span>{slide.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar.jpg"
                  alt="Marco Antonio"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Marco Antonio</strong>
                <span>Gravida ultrices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar-2.jpg"
                  alt="Marissa Spencer"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Marissa Spencer</strong>
                <span>Curabitur commodo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar-4.jpg"
                  alt="Kate White"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Kate White</strong>
                <span>Gravida ultrices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar-3.jpg"
                  alt="Marco Antonio"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Marco Antonio</strong>
                <span>Gravida ultrices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar-2.jpg"
                  alt="Marissa Spencer"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Marissa Spencer</strong>
                <span>Curabitur commodo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial">
            <div className="row">
              <p className="feedback col-lg-8 mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div className="user d-flex align-items-center justify-content-center">
              <div className="avatar">
                <img
                  src="img/avatar-4.jpg"
                  alt="Kate White"
                  className="img-fluid"
                />
              </div>
              <div className="title">
                <strong className="text-uppercase">Kate White</strong>
                <span>Gravida ultrices</span>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </Container>
  </section>
)

export default TestimonialsSection
