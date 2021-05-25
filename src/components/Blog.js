import React from "react";

const Blog = () => {
  return (
    <section
      className="py-9 py-lg-10"
      id="page-blog"
      data-zanim-xs='{"delay":0.4,"animation":"zoom-out"}'
      data-zanim-trigger="scroll"
    >
      <div
        className="bg-holder"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="overflow-hidden">
              <h1
                className="text-white text-underline"
                data-zanim-xs='{"delay":0.6}'
                data-zanim-trigger="scroll"
              >
                sparrow blog
              </h1>
            </div>
            <div className="overflow-hidden">
              <h6
                className="mb-0 text-white ls-2 text-uppercase"
                data-zanim-xs='{"delay":0.8}'
                data-zanim-trigger="scroll"
              >
                Stories to write home about
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
