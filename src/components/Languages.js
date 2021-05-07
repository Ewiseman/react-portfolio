import React from "react";

const Languages = () => {
  return (
    <section className="h-full border-bottom border-300" id="default">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 mb-5 mb-md-7 text-center">
            <h2 className="fs-3 fs-sm-4">
              <span className="font-weight-light">Current stack</span>
            </h2>
          </div>
          <div className="col-lg-5 pr-lg-4 mb-4">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/bootstrap.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2"> Rails</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Build responsive, mobile-first projects on the web with the
                    world's most popular front-end component library.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pr-lg-4 mb-4">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/icon-target.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2">React</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Toggle styles on any element, across any breakpoint
                    according to Bootstrap grid system, using Sparrow's CSS
                    helper classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pr-lg-4 mb-4">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/favorites-button.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2">Bootstrap / Tailwind</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Elegantly redesigned popular plugins including touch
                    sliders, typed text, parallax, video background and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pr-lg-4 mb-4">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/icon-line-chart.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2">Postgres</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Crazy fast, responsive, efficient and freakishly robust
                    GSAP; giving you the new standard for HTML5 and javascript
                    animation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pr-lg-4 mb-4 mb-lg-0">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/multi-purpose.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2">HTML 5</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Create rich UI and style with sparrow's array of ready-made
                    modular sections - carefully designed for wide range of
                    purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pr-lg-4">
            <div className="media">
              <div className="overflow-hidden">
                <img
                  className="media-img mr-3 mr-sm-4"
                  src="assets/img/icons/icon-coding.svg"
                  alt=""
                />
              </div>
              <div className="media-body">
                <div className="overflow-hidden">
                  <h4 className="mb-2">D3.js</h4>
                </div>
                <div className="overflow-hidden">
                  <p>
                    Based on the Bootstrap 4 code base, sparrow's code is
                    instantly familiar, easy to understand and a straightforward
                    to extend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
