import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import {Animated} from "react-animated-css";



const SideNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const NavLinkAnimation = (props) => {
    if (!isNavCollapsed) {
      return  (
        <Animated animationIn="fadeInRight" animationInDuration={1400} animationInDelay={100} isVisible={true}>
          
            <li className="fancynav-item fancy-dropdown"><a className="fancynav-link" href="/#"><span className="fancynav-link-content">Home </span></a>
              <div className="fancy-dropdown-menu">
                <div className="row pb-4 pt-3">
                  <div className="col-auto">
                    <a className="fancy-dropdown-item" href="home-default.html">Default</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="fancynav-item fancy-dropdown"><a className="fancynav-link" href="/#"><span className="fancynav-link-content">Portfolio </span></a>
              <div className="fancy-dropdown-menu">
                <div className="row pb-4 pt-3">
                  <div className="col-auto">
                    <a className="fancy-dropdown-item" href="home-default.html">Default</a>
                  </div>
                </div>
              </div>
            </li>
          
        </Animated>
      ) } else {
        return  (
          <Animated animationIn="fadeOutRight" animationInDuration={1000} animationInDelay={0} isVisible={true}>
            <li className="fancynav-item fancy-dropdown"><a className="fancynav-link" href="/#"><span className="fancynav-link-content">Home </span></a>
              <div className="fancy-dropdown-menu">
                <div className="row pb-4 pt-3">
                  <div className="col-auto">
                    <a className="fancy-dropdown-item" href="home-default.html">Default</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="fancynav-item fancy-dropdown"><a className="fancynav-link" href="/#"><span className="fancynav-link-content">Portfolio </span></a>
              <div className="fancy-dropdown-menu">
                <div className="row pb-4 pt-3">
                  <div className="col-auto">
                    <a className="fancy-dropdown-item" href="home-default.html">Default</a>
                  </div>
                </div>
              </div>
            </li>
          </Animated>
        )
      }
    
  }

  return (

    <nav className="fancynavbar"> 
      <div className="fancynavbar-togglerbar"><h4><a className="fancynavbar-brand" href="/#">EW</a></h4>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <div className="fancynavbar-toggler">
            <Hamburger color={'#fff'}/>
          </div>
        </button>
        
        <div className={`fancynavbar${!isNavCollapsed ? '-not-collapse' : '-collapse'}`} id="navbarsExample09">
          <ul className="fancynavbar-nav">
            
            <NavLinkAnimation />
          
          </ul>
        </div>
      <div className="fancynavbar-addon">

      </div>
      </div>
    </nav>
  );
}

export default SideNav;