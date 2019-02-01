import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="footer pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="logo">
            <strong>Beocat</strong>
            <small>Research Computing at Kansas State University</small>
          </div>
          <ul className="social list-inline">
            <li className="list-inline-item">
              {/*<a href="#" target="_blank">*/}
              {/*<i className="fa fa-facebook" />*/}
              {/*</a>*/}
              <a href="https://twitter.com/KSUBeocat" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              {/*<a href="#" target="_blank">*/}
              {/*<i className="fa fa-instagram" />*/}
              {/*</a>*/}
              <a
                href="https://www.youtube.com/channel/UCfRY7ZCiAf-EzEqJXEXcPrw"
                target="_blank"
              >
                <i className="fa fa-youtube-play" />
              </a>
              {/*<a href="#" target="_blank">*/}
              {/*<i className="fa fa-vimeo" />*/}
              {/*</a>*/}
            </li>
          </ul>
          <p>
            Beocat is a High-Performance Computing (HPC) cluster at Kansas State
            University run by the Institute for Computational Research.
          </p>
        </div>
        <div className="col-lg-3">
          <h4 className="text-thin">Navigation</h4>
          <div className="d-flex flex-wrap">
            <ul className="navigation list-unstyled">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <a href="https://support.beocat.ksu.edu/">Support Docs </a>
              </li>
              <li>
                <a href="https://account.beocat.ksu.edu/">Account </a>
              </li>
            </ul>
            {/*<ul className="navigation list-unstyled">*/}
            {/*<li>*/}
            {/*<a href="#">Blog </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a href="#">Teachers </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a href="#">Privacy</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a href="#">FAQ</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a href="#">Contact</a>*/}
            {/*</li>*/}
            {/*</ul>*/}
          </div>
        </div>
        {/*<div className="col-lg-5 newsletter">*/}
        {/*<h4 className="text-thin">Newsletter</h4>*/}
        {/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus </p>*/}
        {/*<form action="#" className="newsletter-form">*/}
        {/*<div className="form-group">*/}
        {/*<input*/}
        {/*type="email"*/}
        {/*name="email"*/}
        {/*placeholder="Enter your email address."*/}
        {/*className="form-control"*/}
        {/*/>*/}
        {/*<button type="submit">Subscribe</button>*/}
        {/*</div>*/}
        {/*</form>*/}
        {/*</div>*/}
      </div>
    </div>
    <div className="copyrights">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Kansas State University - All
          content released under the MIT License
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
