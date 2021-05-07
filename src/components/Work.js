import React from "react";

const Work = () => {
  return (
    <section class="text-center" id="interior-projects">
      <div class="container">
        <div class="row mb-5">
          <div class="col">
            <h2 className="fs-3 fs-sm-4 mb-5">
              <span className="font-weight-light">Work</span>
            </h2>
            <div class="sortable" data-options='{"layoutMode":"packery"}'>
              <div class="menu justify-content-center mb-2">
                <div class="item active" data-filter="*">
                  all
                </div>
                <div class="item" data-filter=".photography">
                  photography
                </div>
                <div class="item" data-filter=".studio">
                  studio
                </div>
                <div class="item" data-filter=".interior">
                  interior
                </div>
                <div class="item" data-filter=".illustration">
                  illustration
                </div>
              </div>
              <div class="row no-gutters sortable-container sortable-container-gutter-fix">
                <a
                  class="col-6 col-md-4 sortable-item p-2 interior"
                  href="assets/img/interior-7-f.jpg"
                  data-lightbox="image"
                  data-title="my caption"
                >
                  <img
                    class="w-100 rounded"
                    src="assets/img/interior-7.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.1,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                </a>
                <a
                  class="col-6 col-md-4 sortable-item p-2 studio"
                  href="assets/img/interior-11-f.jpg"
                  data-lightbox="image"
                  data-title="my caption"
                >
                  <img
                    class="w-100 rounded"
                    src="assets/img/interior-11.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.2,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                </a>
                <a
                  class="col-6 col-md-4 sortable-item p-2 photography"
                  href="assets/img/interior-8-f.jpg"
                  data-lightbox="image"
                  data-title="my caption"
                >
                  <img
                    class="w-100 rounded"
                    src="assets/img/interior-8.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.3,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                </a>
                <a
                  class="col-6 col-md-4 sortable-item p-2 studio"
                  href="assets/img/interior-9-f.jpg"
                  data-lightbox="image"
                  data-title="my caption"
                >
                  <img
                    class="w-100 rounded"
                    src="assets/img/interior-9.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.4,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                </a>
                <a
                  class="col-6 col-md-4 sortable-item p-2 photography"
                  href="assets/img/interior-12-f.jpg"
                  data-lightbox="image"
                  data-title="my caption"
                >
                  <img
                    class="w-100 rounded"
                    src="assets/img/interior-12.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.5,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                </a>
                <div class="col-6 col-md-4 sortable-item p-2 illustration">
                  <img
                    class="rounded w-100"
                    src="assets/img/interior-13.jpg"
                    alt=""
                    data-zanim-lg='{"delay":0.6,"animation":"zoom-in"}'
                    data-zanim-trigger="scroll"
                  />
                  <a
                    class="position-absolute r-0 b-0 p-2 mr-3 mb-3"
                    href="https://www.youtube.com/watch?v=QD7pOiZBgy0"
                    data-fancybox="data-fancybox"
                    data-options='{"youtube":{"start":1,"end":75}}'
                  >
                    <svg
                      width="45"
                      height="45"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 274.19 274.19"
                      data-zanim-svg='{"duration":2,"ease":"CubicBezier","trigger":"scroll"}'
                    >
                      <defs></defs>
                      <g>
                        <path
                          class="play-path"
                          d="M208.31,29.4A129.12,129.12,0,1,1,137.1,8m-1.48,170.53L199.94,137,104.07,79.46v113"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="col-8 sortable-item p-2 illustration">
                  <div class="embed-responsive embed-responsive-4by3">
                    <div class="embed-responsive-item">
                      <div
                        class="owl-carousel owl-theme owl-dots-inner owl-theme-white"
                        data-options='{"items":1,"autoplay":true,"loop":true,"animateOut":"fadeOut"}'
                        data-zanim-lg='{"delay":0.7,"animation":"zoom-in"}'
                        data-zanim-trigger="scroll"
                      >
                        <img
                          class="rounded fit-cover"
                          src="assets/img/interior-14.jpg"
                          alt=""
                        />
                        <img
                          class="rounded fit-cover"
                          src="assets/img/interior-15.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="col-6 col-md-4 sortable-item p-2 photography color"
                  href="page-casestudy.html"
                >
                  <div class="hoverbox">
                    <img
                      class="hvr-blur w-100 rounded"
                      src="assets/img/interior-10.jpg"
                      alt=""
                      data-zanim-lg='{"delay":0.8,"animation":"zoom-in"}'
                      data-zanim-trigger="scroll"
                    />
                    <div class="hoverbox-primary-content as-hoverbox-content d-flex"></div>
                    <div class="hoverbox-content p-4">
                      <div class="hoverbox-bg d-flex"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
