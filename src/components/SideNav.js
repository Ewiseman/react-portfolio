// import React, { useState, useRef } from "react";
// import Hamburger from "hamburger-react";
// import { Animated } from "react-animated-css";
// import Blog from "./Blog.js";
// import Hero from "./Hero.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const SideNav = () => {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   const NavLinkAnimation = (props) => {
//     if (!isNavCollapsed) {
//       return (
//         <Router>
//           <>
//             <Animated
//               animationIn="fadeInRight"
//               animationInDuration={1400}
//               animationInDelay={100}
//               isVisible={true}
//             >
//               <li className="fancynav-item fancy-dropdown">
//                 <a className="fancynav-link" href="/#languages">
//                   <span
//                     onClick={handleNavCollapse}
//                     className="fancynav-link-content"
//                   >
//                     Home
//                   </span>
//                 </a>
//               </li>
//               <li className="fancynav-item fancy-dropdown">
//                 <a className="fancynav-link" href="/">
//                   <span className="fancynav-link-content">Work </span>
//                 </a>
//               </li>
//               <li className="fancynav-item fancy-dropdown">
//                 <a className="fancynav-link" href="/blog">
//                   <span className="fancynav-link-content">Blog </span>
//                 </a>
//               </li>
//               <li className="fancynav-item fancy-dropdown">
//                 <a className="fancynav-link" href="/">
//                   <span className="fancynav-link-content">Contact </span>
//                 </a>
//               </li>
//             </Animated>
//           </>
//         </Router>
//       );
//     } else {
//       return (
//         <Animated
//           animationIn="fadeOutRight"
//           animationInDuration={1000}
//           animationInDelay={0}
//           isVisible={true}
//         >
//           <li className="fancynav-item fancy-dropdown">
//             <span className="fancynav-link">
//               <span className="fancynav-link-content">Home </span>
//             </span>
//           </li>
//           <li className="fancynav-item fancy-dropdown">
//             <span className="fancynav-link">
//               <span className="fancynav-link-content">Work </span>
//             </span>
//           </li>
//           <li className="fancynav-item fancy-dropdown">
//             <a className="fancynav-link" href="/blog">
//               <span className="fancynav-link-content">Blog </span>
//             </a>
//           </li>
//           <li className="fancynav-item fancy-dropdown">
//             <span className="fancynav-link">
//               <span className="fancynav-link-content">Contact </span>
//             </span>
//           </li>
//         </Animated>
//       );
//     }
//   };

//   return (
//     <div>
//       <nav className="fancynavbar">
//         <div className="fancynavbar-togglerbar">
//           <h4>
//             <a className="fancynavbar-brand" href="/#">
//               EW
//             </a>
//           </h4>
//           <button
//             className="custom-toggler navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarsExample09"
//             aria-controls="navbarsExample09"
//             aria-expanded={!isNavCollapsed ? true : false}
//             aria-label="Toggle navigation"
//             onClick={handleNavCollapse}
//           >
//             <div className="fancynavbar-toggler">
//               <Hamburger color={"#fff"} />
//             </div>
//           </button>

//           <div
//             className={`fancynavbar${
//               !isNavCollapsed ? "-not-collapse" : "-collapse"
//             }`}
//             id="navbarsExample09"
//           >
//             <ul className="fancynavbar-nav">
//               <NavLinkAnimation />
//             </ul>
//           </div>
//           <div className="fancynavbar-addon"></div>
//         </div>
//       </nav>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Hero />
//           </Route>
//           <Route exact path="/blog">
//             <Blog />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default SideNav;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./Hero.js";
import { Animated } from "react-animated-css";
import Hamburger from "hamburger-react";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Hero />,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
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

  const NavLinkAnimation = (props) => {
    if (!isNavCollapsed) {
      return (
        <Router>
          <></>
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
            <Link to="/">Home</Link>
          </li>
          <li className="fancynav-item fancy-dropdown">
            <span className="fancynav-link">
              <span className="fancynav-link-content">Work </span>
            </span>
          </li>
          <li className="fancynav-item fancy-dropdown">
            <a className="fancynav-link" href="/blog">
              <span className="fancynav-link-content">Blog </span>
            </a>
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
                {!isNavCollapsed && (
                  <Animated
                    animationIn="fadeInRight"
                    animationInDuration={1400}
                    animationInDelay={100}
                    isVisible={true}
                  >
                    <Link to="/">
                      <li className="fancynav-item fancy-dropdown">
                        <span className="fancynav-link">
                          <span className="fancynav-link-content">Home </span>
                        </span>
                      </li>
                    </Link>

                    <Link to="/blog">
                      <li className="fancynav-item fancy-dropdown">
                        <span className="fancynav-link">
                          <span className="fancynav-link-content">Blog</span>
                        </span>
                      </li>
                    </Link>
                    <li className="fancynav-item fancy-dropdown">
                      <a className="fancynav-link" href="/">
                        <span className="fancynav-link-content">Contact </span>
                      </a>
                    </li>
                  </Animated>
                )}
                :{" "}
                {
                  <Animated
                    animationIn="fadeOutRight"
                    animationInDuration={1000}
                    animationInDelay={0}
                    isVisible={true}
                  >
                    <Link to="/">
                      <li className="fancynav-item fancy-dropdown">
                        <a className="fancynav-link" href="/blog">
                          <span className="fancynav-link-content">Blog </span>
                        </a>
                      </li>
                    </Link>
                    <li className="fancynav-item fancy-dropdown">
                      <span className="fancynav-link">
                        <span className="fancynav-link-content">Work </span>
                      </span>
                    </li>
                    <li className="fancynav-item fancy-dropdown">
                      <a className="fancynav-link" href="/blog">
                        <span className="fancynav-link-content">Blog </span>
                      </a>
                    </li>
                    <li className="fancynav-item fancy-dropdown">
                      <span className="fancynav-link">
                        <span className="fancynav-link-content">Contact </span>
                      </span>
                    </li>
                  </Animated>
                }
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
