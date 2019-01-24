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
            <p className="mb-0"><i className="icon-placeholder"></i>Engineering Hall 2221 A/B, Kansas State University</p>
          </div>
          <div className="col-md-6 text-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="mailto:info@university.com"><i className="icon-envelope"></i>beocat@cs.ksu.edu</a>
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
          <div className="close-btn"><i className="icon-close"></i></div>
          <form action="#" className="search-form">
            <div className="form-group mb-0">
              <input type="search" name="search" id="search" placeholder="What are you searching for..." />
                <button type="submit" className="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container"><a href="index.html" className="navbar-brand"><strong>Beocat</strong>
        <small>Research Computing at Kansas State University</small>
      </a>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right mt-0"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
            <div className="nav-item"><a href="index.html" className="nav-link active">Home <span
              className="sr-only">(current)</span></a></div>
            {/*// <!-- multi-level dropdown-->*/}
            <div className="nav-item dropdown"><a id="navbarDropdownMenuLink" href="http://example.com"
                                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                  className="nav-link">Dropdown <i className="fa fa-angle-down"></i></a>
              <ul aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                <li><a href="#" className="dropdown-item nav-link">Another action</a></li>
                <li className="dropdown-submenu"><a id="navbarDropdownMenuLink2" href="http://example.com"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                    className="nav-link">Dropdown link <i
                  className="fa fa-angle-down"></i></a>
                  <ul aria-labelledby="navbarDropdownMenuLink2" className="dropdown-menu">
                    <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                    <li className="dropdown-submenu"><a id="navbarDropdownMenuLink3" href="http://example.com"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" className="nav-link">

                      Another action <i className="fa fa-angle-down"></i></a>
                      <ul aria-labelledby="navbarDropdownMenuLink3" className="dropdown-menu">
                        <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                        <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                        <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                        <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                      </ul>
                    </li>
                    <li><a href="#" className="dropdown-item nav-link">Something else here </a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav-item"><a href="courses.html" className="nav-link">Courses </a></div>
            <div className="nav-item"><a href="staff.html" className="nav-link">Staff </a></div>
            <div className="list-inline-item dropdown menu-large"><a id="megamenu" href="#" data-toggle="dropdown"
                                                                     className="nav-link">Pages <i
              className="fa fa-angle-down"></i></a>
              <div aria-labelledby="megamenu" className="dropdown-menu megamenu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3"><strong className="text-uppercase">Main</strong>
                      <ul className="list-unstyled">
                        <li><a href="index.html">Homepage</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="courses-2.html">Courses - table</a></li>
                        <li><a href="course-detail.html">Course detail</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Blog & text</strong>
                      <ul className="list-unstyled">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-post.html">Blog post</a></li>
                        <li><a href="text.html">Text page</a></li>
                        <li><a href="staff.html">Staff</a></li>
                        <li><a href="staff-detail.html">Staff detail </a></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Just demo </strong>
                      <ul className="list-unstyled">
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Just demo </strong>
                      <ul className="list-unstyled">
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">Demo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item"><a href="blog.html" className="nav-link">Blog</a></div>
            <div className="nav-item"><a href="#" className="nav-link search-btn"><i className="fa fa-search"></i></a>
            </div>
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
