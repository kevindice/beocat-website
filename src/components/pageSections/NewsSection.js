import React from 'react'

const NewsSection = () => (
  <section className="latest-news">
    <div className="container">
      <header className="text-center">
        <h2>
          <small>Our latest news</small>
          Latest News
        </h2>
      </header>
      <ul id="pills-tab" role="tablist" className="nav nav-pills nav-justified">
        <li className="nav-item"><a id="students-tab" data-toggle="pill" href="#pills-students" role="tab"
                                    aria-controls="pills-students" aria-selected="true"
                                    className="nav-link active">Students</a></li>
        <li className="nav-item"><a id="teachers-tab" data-toggle="pill" href="#pills-teachers" role="tab"
                                    aria-controls="pills-teachers" aria-selected="false"
                                    className="nav-link">Teachers</a></li>
        <li className="nav-item"><a id="prospects-tab" data-toggle="pill" href="#pills-prospects" role="tab"
                                    aria-controls="pills-prospects" aria-selected="false"
                                    className="nav-link">Prospects</a></li>
      </ul>
      <div id="pills-tabContent" className="tab-content">
        <div id="pills-students" role="tabpanel" aria-labelledby="students-tab" className="tab-pane fade show active">
          <div className="row">
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div style={{ background: 'url(img/news-bg.jpg)' }} className="news-block-inner bg-image">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-light">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pills-teachers" role="tabpanel" aria-labelledby="teachers-tab" className="tab-pane fade">
          <div className="row">
            <div className="col-lg-4">
              <div className="news-block">
                <div style={{ background: 'url(img/news-bg.jpg)' }} className="news-block-inner bg-image">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-light">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pills-prospects" role="tabpanel" aria-labelledby="prospects-tab" className="tab-pane fade">
          <div className="row">
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div className="news-block-inner bg-gray">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-primary">Read
                  more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-block">
                <div style={{ background: 'url(img/news-bg.jpg' }} className="news-block-inner bg-image">
                  <small className="text-transform">February 24, 2017</small>
                  <h4>Globalization and Human Rights class</h4>
                  <p> Lommodo ligula eget dolor. Aenean massa. Cum sociis que</p><a href="#"
                                                                                    className="btn btn-outline-light">Read
                  more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default NewsSection