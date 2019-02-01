import React from 'react'
import { Link } from 'gatsby'

const GenericHero = ({ title, children }) => (
  <section className="hero hero-page">
    <div
      style={{ background: 'url(img/staff-banner.jpg)' }}
      className="hero-banner"
    />
    <div className="container">
      <nav aria-label="breadcrumb" role="navigation">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            {title}
          </li>
        </ol>
      </nav>
      <h1>{title}</h1>
      <div className="row">{children}</div>
    </div>
  </section>
)

export default GenericHero
