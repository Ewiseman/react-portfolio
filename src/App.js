
import Hero from './components/Hero.js'

function App() {
  return (
    <div className="has-sidemenu overflow-hidden-x">

      
      <nav class="fancynavbar">
      <div class="fancynavbar-togglerbar"><h4><a class="fancynavbar-brand" href="/#">EW</a></h4>

        
        
        <div class="fancynavbar-toggler">
          <svg class="fancynavbar-toggler-icon" viewBox="0 0 70 70">
            <path id="path-top" d="M20,25c0,0,22,0,30,0c16,0,18.89,40.71-.15,21.75C38.7,35.65,19.9,16.8,19.9,16.8"></path>
            <path id="path-middle" d="M20,32h30"></path>
            <path id="path-bottom" d="M19.9,46.98c0,0,18.8-18.85,29.95-29.95C68.89-1.92,66,38.78,50,38.78c-8,0-30,0-30,0"></path>
          </svg>
        </div>
      </div>
        <div class="fancynavbar-collapse">
          <ul class="fancynavbar-nav">
            <li class="fancynav-item fancy-dropdown"><a class="fancynav-link fancy-dropdown-toggle" href="/#"><span class="fancynav-link-content">homes</span></a>
              <div class="fancy-dropdown-menu">
                <div class="row pb-4 pt-3">
                  <div class="col-auto">
                    <a class="fancy-dropdown-item" href="home-default.html">Default</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="preloader" id="preloader">
        <div class="loader">
          <div class="line-scale-pulse-out-rapid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <Hero />
    </div>
   
 
  );
}

export default App;
