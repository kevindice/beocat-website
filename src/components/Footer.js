import React from 'react'

const Footer = () => (
  <footer className="footer pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="logo"><strong>Beocat</strong>
            <small>Research Computing at Kansas State University</small>
          </div>
          <ul className="social list-inline">
            <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-facebook"></i></a><a
              href="#" target="_blank"><i className="fa fa-twitter"></i></a><a href="#" target="_blank"><i
              className="fa fa-instagram"></i></a><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a><a
              href="#" target="_blank"><i className="fa fa-vimeo"></i></a></li>
          </ul>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos.</p>
        </div>
        <div className="col-lg-3">
          <h4 className="text-thin">Navigation</h4>
          <div className="d-flex flex-wrap">
            <ul className="navigation list-unstyled">
              <li><a href="#">Home </a></li>
              <li><a href="#">About </a></li>
              <li><a href="#">Course</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
            <ul className="navigation list-unstyled">
              <li><a href="#">Blog </a></li>
              <li><a href="#">Teachers </a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 newsletter">
          <h4 className="text-thin">Newsletter</h4>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus </p>
          <form action="#" className="newsletter-form">
            <div className="form-group">
              <input type="email" name="email" placeholder="Enter your email address." className="form-control" />
                <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="copyrights">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Kansas State University - All content released under the MIT License</p>
      </div>
    </div>
  </footer>
)

export default Footer