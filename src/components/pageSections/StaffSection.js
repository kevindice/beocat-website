import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const staff = [
  {
    name: 'Dan Andresen',
    title: (
      <>
        Professor, Computer Science
        <br />
        Director, Institute for Computational Research in Engineering and
        Science
      </>
    ),
    img: 'img/dan.jpg',
  },
]

const StaffSection = () => (
  <section className="staff bg-gray">
    <Container>
      <Row>
        {staff.map(dude => (
          <Col lg={4}>
            <div className="staff-member">
              <img src={dude.img} alt={dude.name} />
              <div className="info">
                <h3 className="h5 teacher mb-0">{dude.name}</h3>
                <span>{dude.title}</span>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner" />
              </div>
            </div>
          </Col>
        ))}
        <Col lg={4}>
          <div className="staff-member">
            <img src="img/teacher-1.jpg" alt="Joe Denver" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Joe Denver</h3>
              <span>Instuctor of Computer science</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p className="teacher-quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="staff-detail.html" className="teacher-name">
                  <h3 className="h5 mb-0 teacher">Joe Denver</h3>
                </a>
                <span className="teacher-field">
                  Instuctor of Computer science
                </span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
                <p className="teacher-see-profile">
                  <a href="staff-detail.html" className="btn btn-outline-light">
                    See Joe Denver's profile{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-lg-4">
          <div className="staff-member">
            <img src="img/teacher-2.jpg" alt="Richard Ford" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Richard Ford</h3>
              <span>Instructor of Mathematics</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p className="teacher-quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="staff-detail.html" className="teacher-name">
                  <h3 className="h5 mb-0 teacher">Richard Ford</h3>
                </a>
                <span className="teacher-field">Instructor of Mathematics</span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
                <p className="teacher-see-profile">
                  <a href="staff-detail.html" className="btn btn-outline-light">
                    See Richard Ford's profile{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="staff-member">
            <img src="img/teacher-3.jpg" alt="Nadia Stark" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Nadia Stark</h3>
              <span>Instructor of French Language</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p className="teacher-quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="staff-detail.html" className="teacher-name">
                  <h3 className="h5 mb-0 teacher">Nadia Stark</h3>
                </a>
                <span className="teacher-field">
                  Instructor of French Language
                </span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
                <p className="teacher-see-profile">
                  <a href="staff-detail.html" className="btn btn-outline-light">
                    See Nadia Stark's profile{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <div className="row">
        <div className="col-lg-3">
          <div className="staff-member">
            <img src="img/teacher-4.jpg" alt="Manuel Nevoresky" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Manuel Nevoresky</h3>
              <span>Instuctor of Computer science</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="">
                  <h3 className="h5 mb-0 teacher">Manuel Nevoresky</h3>
                </a>
                <span>Instuctor of Computer science</span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="staff-member">
            <img src="img/teacher-5.jpg" alt="Sam Halsey" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Sam Halsey</h3>
              <span>Instuctor of Computer science</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="">
                  <h3 className="h5 mb-0 teacher">Sam Halsey</h3>
                </a>
                <span>Instuctor of Computer science</span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="staff-member">
            <img src="img/teacher-6.jpg" alt="Martial Fillipe" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Martial Fillipe</h3>
              <span>Instuctor of Computer science</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="">
                  <h3 className="h5 mb-0 teacher">Martial Fillipe</h3>
                </a>
                <span>Instuctor of Computer science</span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="staff-member">
            <img src="img/teacher-7.jpg" alt="Martial Fillipe" />
            <div className="info">
              <h3 className="h5 teacher mb-0">Martial Fillipe</h3>
              <span>Instuctor of Computer science</span>
            </div>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overlay-inner">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."{' '}
                </p>
                <a href="">
                  <h3 className="h5 mb-0 teacher">Martial Fillipe</h3>
                </a>
                <span>Instuctor of Computer science</span>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" target="_blank">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<nav aria-label="Page navigation example" className="d-flex justify-content-center">*/}
      {/*<ul className="pagination">*/}
      {/*<li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span*/}
      {/*aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>*/}
      {/*<li className="page-item active"><a href="#" className="page-link">1</a></li>*/}
      {/*<li className="page-item"><a href="#" className="page-link">2</a></li>*/}
      {/*<li className="page-item"><a href="#" className="page-link">3</a></li>*/}
      {/*<li className="page-item"><a href="#" aria-label="Next" className="page-link"><span*/}
      {/*aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>*/}
      {/*</ul>*/}
      {/*</nav>*/}
    </Container>
  </section>
)

export default StaffSection
