import React from 'react'

const InfoBoxes = () => (
  <section className="info-boxes">
    <div className="container">
      <div className="row">
        <a
          href="#"
          style={{ background: 'url(img/boxes-img-1.jpeg)' }}
          className="info-box cyan col-lg-4"
        >
          <div className="info-box-content">
            <h3 className="text-uppercase">Programs</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </a>
        <a
          href="#"
          style={{ background: 'url(img/boxes-img-2.jpg)' }}
          className="info-box orange col-lg-4"
        >
          <div className="info-box-content">
            <h3 className="text-uppercase">Affordability</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </a>
        <a
          href="#"
          style={{ background: 'url(img/boxes-img-3.jpeg)' }}
          className="info-box red col-lg-4"
        >
          <div className="info-box-content">
            <h3 className="text-uppercase">Certification</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
)

export default InfoBoxes
