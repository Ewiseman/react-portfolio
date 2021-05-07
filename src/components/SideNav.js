import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Animated } from "react-animated-css";
import Blog from "./Blog.js";
import Hero from "./Hero.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SideNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const NavLinkAnimation = (props) => {
    if (!isNavCollapsed) {
      return (
        <Router>
          <>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1400}
              animationInDelay={100}
              isVisible={true}
            >
              <li className="fancynav-item fancy-dropdown">
                <Link to={`/`}>
                  <span className="fancynav-link" href="/#">
                    <span
                      onClick={handleNavCollapse}
                      className="fancynav-link-content"
                    >
                      Home
                    </span>
                  </span>
                </Link>
              </li>
              <li className="fancynav-item fancy-dropdown">
                <a className="fancynav-link" href="/#">
                  <span className="fancynav-link-content">Work </span>
                </a>
              </li>
              <li className="fancynav-item fancy-dropdown">
                <Link to={`/blog`}>
                  <span className="fancynav-link">
                    <span className="fancynav-link-content">Blog </span>
                  </span>
                </Link>
              </li>
              <li className="fancynav-item fancy-dropdown">
                <a className="fancynav-link" href="/#">
                  <span className="fancynav-link-content">Contact </span>
                </a>
              </li>
            </Animated>
          </>
        </Router>
      );
    } else {
      return (
        <Animated
          animationIn="fadeOutRight"
          animationInDuration={1000}
          animationInDelay={0}
          isVisible={true}
        >
          <li className="fancynav-item fancy-dropdown">
            <span className="fancynav-link">
              <span className="fancynav-link-content">Home </span>
            </span>
          </li>
          <li className="fancynav-item fancy-dropdown">
            <span className="fancynav-link">
              <span className="fancynav-link-content">Work </span>
            </span>
          </li>
          <li className="fancynav-item fancy-dropdown">
            <span className="fancynav-link">
              <span className="fancynav-link-content">Blog </span>
            </span>
          </li>
          <li className="fancynav-item fancy-dropdown">
            <span className="fancynav-link">
              <span className="fancynav-link-content">Contact </span>
            </span>
          </li>
        </Animated>
      );
    }
  };

  return (
    <div>
      <nav className="fancynavbar">
        <div className="fancynavbar-togglerbar">
          <h4>
            <a className="fancynavbar-brand" href="/#">
              EW
            </a>
          </h4>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <div className="fancynavbar-toggler">
              <Hamburger color={"#fff"} />
            </div>
          </button>

          <div
            className={`fancynavbar${
              !isNavCollapsed ? "-not-collapse" : "-collapse"
            }`}
            id="navbarsExample09"
          >
            <ul className="fancynavbar-nav">
              <NavLinkAnimation />
            </ul>
          </div>
          <div className="fancynavbar-addon"></div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
