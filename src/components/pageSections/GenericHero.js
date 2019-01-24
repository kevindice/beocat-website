import React from 'react'

const GenericHero = ({ title, children }) => (
  <section className="hero hero-page">
    <div style={{ background: 'url(img/staff-banner.jpg)' }} className="hero-banner"></div>
    <div className="container">
      <nav aria-label="breadcrumb" role="navigation">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li aria-current="page" className="breadcrumb-item active">{ title }</li>
        </ol>
      </nav>
      <h1>{ title }</h1>
      <div className="row">
        {children}
      </div>
    </div>
  </section>
)

export default GenericHero