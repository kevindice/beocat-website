import React from 'react'

const IntroSection = () => (
  <section className="intro">
    <div className="container text-center">
      <header>
        <h2>
          <small>Some small heading here</small>
          Welcome to Beocat
        </h2>
      </header>
      <div className="row">
        <p className="col-lg-8 mx-auto">
          The Beocat compute cluster supplies over 350 Kansas State University
          researchers with more than 35 million hours of computing power per year.
        </p>
        <p className="col-lg-8 mx-auto">
          **Info here about the nature of research for which Beocat is used.**
        </p>
      </div>
      <div className="signature mx-auto">
        <img
          src="img/signature.png"
          alt="Photo of the Beocat team?"
          className="img-fluid"
        />
      </div>
      <div className="author">
        <strong>Beocat Staff</strong>
        <span>subtitle</span>
      </div>
    </div>
  </section>
)

export default IntroSection
