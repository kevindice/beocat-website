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
  {
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    img: 'img/avatar-2.jpg',
    name: 'Name 456',
    title: '',
  },
  {
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    img: 'img/avatar-3.jpg',
    name: 'Name 789',
    title: '',
  },
  {
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    img: 'img/avatar-4.jpg',
    name: 'Name 101',
    title: '',
  },
]

class TestimonialsSection extends React.Component {
  // This forced update is a hack
  // Without it, the Swiper component seems to incorrectly
  // initialize the width of the slides.  By forcing an update
  // we get it to re-init to the correct widths.
  // Note: 200ms seems to be too quick.  Nobody will scroll down
  // quickly enough to see it in a bad state. 500ms seems to work.
  componentDidMount() {
    const x = this
    setTimeout(() => {
      x.forceUpdate()
    }, 500)
  }

  render() {
    return (
      <section className="testimonials">
        <Container className="text-center">
          <header>
            <h2>
              <small>User Feedback</small>
              Researcher Testimonials
            </h2>
          </header>
          <Swiper
            rebuildOnUpdate={true}
            shouldSwiperUpdate={true}
            pagination={{
              el: '.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-bullets-dynamic'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
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

          </Swiper>
        </Container>
      </section>
    )
  }
}

export default TestimonialsSection
