import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./Hero.js";
import { Animated } from "react-animated-css";
import Hamburger from "hamburger-react";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <Hero />,
  },
  {
    path: "/blog",
    sidebar: () => <div></div>,
    main: () => <h2>blog</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

export default function SideNav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const [isOpen, setOpen] = useState(false);

  const menuItem = () => setOpen(!isOpen);

  return (
    <Router>
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
              onClick={handleNavCollapse}
            >
              <div id="ham">
                <Hamburger
                  toggled={!isNavCollapsed}
                  toggle={setIsNavCollapsed}
                  color={"#fff"}
                />
              </div>
            </button>

            <div
              className={`fancynavbar${
                !isNavCollapsed ? "-not-collapse" : "-collapse"
              }`}
            >
              <ul className="fancynavbar-nav">
                {!isNavCollapsed && (
                  <Animated
                    animationIn="fadeInRight"
                    animationInDuration={1000}
                    animationInDelay={100}
                    isVisible={true}
                  >
                    <Link to="/">
                      <li className="fancynav-item fancy-dropdown">
                        <span className="fancynav-link">
                          <span
                            className="fancynav-link-content"
                            onClick={handleNavCollapse}
                          >
                            Home
                          </span>
                        </span>
                      </li>
                    </Link>

                    <Link to="/blog">
                      <li className="fancynav-item fancy-dropdown">
                        <span className="fancynav-link">
                          <span
                            className="fancynav-link-content"
                            onClick={handleNavCollapse}
                          >
                            Blog
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="fancynav-item fancy-dropdown">
                        <span className="fancynav-link">
                          <span
                            className="fancynav-link-content"
                            onClick={handleNavCollapse}
                          >
                            Contact
                          </span>
                        </span>
                      </li>
                    </Link>
                  </Animated>
                )}
              </ul>
            </div>
            <div className="fancynavbar-addon"></div>
          </div>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </nav>
      </div>
      <div>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
