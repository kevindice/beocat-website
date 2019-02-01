import React from 'react'

const BlogSection = () => (
  <section className="blog bg-gray">
    <div className="container">
      <header className="text-center">
        <h2>
          <small>From the blog</small>
          Recent Posts
        </h2>
      </header>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog-post">
            <div className="image">
              <img
                src="img/blog-img.jpg"
                alt="Projects aim to help those experiencing mental"
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <a href="blog-post.html" className="btn btn-outline-light">
                  Read more
                </a>
              </div>
            </div>
            <div className="author">
              <img src="img/avatar.jpg" alt="author" className="img-fluid" />
            </div>
            <div className="text">
              <a href="blog-post.html">
                <h4 className="text-this">
                  Projects aim to help those experiencing mental
                </h4>
              </a>
              <ul className="post-meta list-inline">
                <li className="list-inline-item">
                  <i className="icon-clock-1" /> 14 August 2017
                </li>
                <li className="list-inline-item">
                  <i className="icon-chat" />
                  340
                </li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-post">
            <div className="image">
              <img
                src="img/blog-img-2.jpeg"
                alt="Projects aim to help those experiencing mental"
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <a href="blog-post.html" className="btn btn-outline-light">
                  Read more
                </a>
              </div>
            </div>
            <div className="author">
              <img src="img/avatar-2.jpg" alt="author" className="img-fluid" />
            </div>
            <div className="text">
              <a href="blog-post.html">
                <h4 className="text-this">
                  Projects aim to help those experiencing mental
                </h4>
              </a>
              <ul className="post-meta list-inline">
                <li className="list-inline-item">
                  <i className="icon-clock-1" /> 14 August 2017
                </li>
                <li className="list-inline-item">
                  <i className="icon-chat" />
                  340
                </li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-post">
            <div className="image">
              <img
                src="img/blog-img-3.jpeg"
                alt="Projects aim to help those experiencing mental"
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <a href="blog-post.html" className="btn btn-outline-light">
                  Read more
                </a>
              </div>
            </div>
            <div className="author">
              <img src="img/avatar-3.jpg" alt="author" className="img-fluid" />
            </div>
            <div className="text">
              <a href="blog-post.html">
                <h4 className="text-this">
                  Projects aim to help those experiencing mental
                </h4>
              </a>
              <ul className="post-meta list-inline">
                <li className="list-inline-item">
                  <i className="icon-clock-1" /> 14 August 2017
                </li>
                <li className="list-inline-item">
                  <i className="icon-chat" />
                  340
                </li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BlogSection
