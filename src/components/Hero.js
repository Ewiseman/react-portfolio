import React from 'react'
import Background from '.././assets/img/photo-3.jpg';

const Hero = () => {
  return (
    <section className="py-0">
      <div className="container-fluid">
        <div className="row h-full border-bottom border-300">
          <div className="col-lg-6 px-0 order-lg-2">
            <div className="owl-carousel owl-theme owl-dots-inner owl-theme-white h-100">
              <div className="min-vh-lg-100 py-9">
                <div class="bg-holder" style={{backgroundImage: `url(${Background})`}}></div>             
              </div>
            </div>
          </div>
          <div className="col-lg-6 bg-white py-7 py-md-8">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-lg-10 text-black text-center text-lg-left">
                <div className="overflow-hidden">
                  <h4 className="text-uppercase font-weight-normal ls text-white bg-dark p-1 rounded d-inline-block" data-zanim-xs='{"delay":0.1}'>Eric Wiseman</h4>
                </div>
                <div className="">
                  <h1 className="display-3 fs-5 fs-sm-5" data-zanim-xs='{"delay":0.2}'><span className="text-underline font-weight-light">Full-Stack</span><br /><span className="font-weight-light">Developer</span></h1>
                </div>
                <div className="">
                  <p className="text-900 fs-0 mt-3 mt-md-5" data-zanim-xs='{"delay":0.3}'>Creating data driven user experiences <br />that wow and excite.</p>
                </div>
                <div className="">
                  <div className="d-lg-flex align-items-center font-weight-bold ls mt-3 mt-md-5 text-uppercase" data-zanim-xs='{"delay":0.4}'>
                    <h6 className="mb-lg-0">Follow:</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Hero;