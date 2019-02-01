import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="header">
    {/*// <!-- top bar-->*/}
    <div className="top-bar d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              <i className="icon-placeholder" />
              Engineering Hall 2219, Kansas State University
            </p>
          </div>
          <div className="col-md-6 text-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="mailto:info@university.com">
                  <i className="icon-envelope" />
                  beocat@cs.ksu.edu
                </a>
              </li>
              {/*<li className="list-inline-item"><a href="#"><i className="icon-telephone"></i>123-456-789</a></li>*/}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*// <!-- navbar-->*/}
    <nav className="navbar navbar-expand-lg">
      <div className="search">
        <div className="search-inner d-flex align-items-center justify-content-center">
          <div className="close-btn">
            <i className="icon-close" />
          </div>
          <form action="#" className="search-form">
            <div className="form-group mb-0">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="What are you searching for..."
              />
              <button type="submit" className="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <strong>Beocat</strong>
          <small>Research Computing at Kansas State University</small>
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler navbar-toggler-right mt-0"
        >
          <span />
          <span />
          <span />
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <Link to="/" className="nav-link active">
                Home{' '}
              </Link>
            </div>

            {/*<div className="nav-item">*/}
            {/*<Link to="/staff" className="nav-link">*/}
            {/*Staff{' '}*/}
            {/*</Link>*/}
            {/*</div>*/}

            <div className="nav-item">
              <a href="https://support.beocat.ksu.edu/" className="nav-link">
                Support Docs
              </a>
            </div>

            <div className="nav-item">
              <a href="https://account.beocat.ksu.edu/" className="nav-link">
                Account
              </a>
            </div>

            {/*<div className="nav-item">*/}
            {/*<a href="#" className="nav-link search-btn">*/}
            {/*<i className="fa fa-search" />*/}
            {/*</a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
