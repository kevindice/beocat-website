import React from 'react'

const DividerSection = () => (
  <section
    style={{ background: 'url(img/divider-bg.jpg) fixed' }}
    className="divider has-overlay-darker"
  >
    <div className="container">
      <h2>Get an Account</h2>
      <div className="row">
        <p className="col-lg-8">
          Beocat accounts are open to all researchers in the State of Kansas,
          free of charge.
        </p>
      </div>
      <div className="CTAs">
        <a href="https://accounts.beocat.ksu.edu/" className="btn btn-primary">
          Apply now
        </a>
        <a
          href="https://support.beocat.ksu.edu/"
          className="btn btn-outline-light"
        >
          Learn more
        </a>
      </div>
    </div>
  </section>
)

export default DividerSection
