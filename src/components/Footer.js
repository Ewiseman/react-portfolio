import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-600 py-4 text-sans-serif text-center overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-2">
              <a className="indicator indicator-up" href="#top">
                <span className="indicator-arrow indicator-arrow-one"></span>
                <span className="indicator-arrow indicator-arrow-two"></span>
              </a>
            </div>
            <div className="col-lg-4 text-lg-left mt-4 mt-lg-0">
              <p className="fs--1 text-uppercase ls font-weight-bold mb-0">
                Copyright &copy; Eric Wiseman, LLC
              </p>
            </div>
            <div className="col-lg-4 text-lg-right order-lg-2 mt-2 mt-lg-0">
              <p className="fs--1 text-uppercase ls font-weight-bold mb-0">
                Made with<span className="text-danger fas fa-heart mx-1"></span>
                by{" "}
                <a className="text-600" href="https://themewagon.com/">
                  Themewagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
