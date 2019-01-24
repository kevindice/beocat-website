import React from 'react'

const TourSection = () => (
  <section className="tour bg-gray">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-4">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=TqnCbqUg-tc" data-lity>
              <img src="img/tour-bg.jpg" alt="..." />
              <div className="overlay d-flex align-items-center justify-content-center">
                <img src="img/play.svg" alt="..." />
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-8 text">
          <header>
            <h2>
              <small>Learn more about Beocat</small>
              Request a Tour
            </h2>
          </header>
          <p className="h4">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <a href="#"
             className="btn btn-primary">Apply
            now
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default TourSection