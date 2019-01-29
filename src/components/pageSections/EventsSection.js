import React from 'react'
import Swiper from 'react-id-swiper'
import { Container, Row, Col } from 'reactstrap'
import 'react-id-swiper/src/styles/scss/swiper.scss'

const BEOCAT_CALENDAR = 'https://www.googleapis.com/calendar/v3/calendars/hek6gpeu4bg40tdb2eqdrlfiuo@group.calendar.google.com/events?singleEvents=True&key=AIzaSyDLn7Sa9o14haRZw7bff3b8OGIG9xkK0Us'

class EventsSection extends React.Component {
  state = {
    data: { items: [] }
  }

  componentDidMount() {
    fetch(BEOCAT_CALENDAR, { mode: 'cors', headers: {
      "Content-Type": "application/json"
      } }).then(
      data => data.json()
    ).then(data => {
      console.log(data)
      this.setState({ data })
    })
  }

  render() {
    const { data } = this.state
    const events = data.items.filter(event => {
      // Filter out all day events from the past
      if (event.start && event.start.date && (Date.parse(event.start.date) - Date.parse(new Date()) < 0)) {
        return false
      }

      // Filter out partial day events from the past
      if (event.start && event.start.dateTime && (Date.parse(event.start.dateTime) - Date.parse(new Date()) < 0)) {
        return false
      }

      return true
    })

    console.log(events)
    console.log(events.map(event => event.start))
    console.log('title', events.map(event=>event.summary))

    return (
      <section className="events">
        <div className="container">
          <header className="text-center">
            <h2>
              <small>Training Sessions, Support Office Hours, and More</small>
              Upcoming Events
            </h2>
            <div className="row text-center">
              <p className="col-lg-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam
              </p>
            </div>
          </header>

          <Swiper
            containerClass="swiper-container events-slider pb-5"
          >
            {data.items && data.items.map(item => (
              <div key={item.id}>
                <Row className="event align-items-center align-items-stretch">
                  <Col lg={6} className="pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-1.jpeg"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>123</strong>
                          <span>Cake</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} className="pr-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>{item.summary && item.summary}</h4>
                        {item.description && <p>{item.description}</p>}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Swiper>

          <div className="swiper-container events-slider pb-5">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-1.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>June 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-2.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>July 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-3.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>August 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-1.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>June 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-2.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>July 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="event row align-items-center align-items-stretch">
                  <div className="col-lg-6 pr-lg-0">
                    <div className="image">
                      <img
                        src="img/events-img-3.jpeg"
                        alt="Most part fantastic faculty members for the most students"
                      />
                      <div className="overlay d-flex align-items-end">
                        <div className="date">
                          <strong>27</strong>
                          <span>August 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-lg-0">
                    <div className="text bg-gray d-flex align-items-center">
                      <div className="text-inner">
                        <h4>
                          Most part fantastic faculty members for the most students
                        </h4>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi.
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*// <!-- Add Pagination-->*/}
            <div className="swiper-pagination mt-5" />
          </div>
        </div>
      </section>
    )
  }
}

export default EventsSection
