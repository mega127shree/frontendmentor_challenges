 import React from 'react';
 import {Link} from 'react-router-dom';
 import Offer from './Offer';
 import Findmore from './Findmore';
 import Footer from './Footer';
 import '../Styles/Style.css';
 import {Images} from './Images';
 const Home = () => {
    return (
      <div className="main">
         <header>
        <div className="homeLayout">
            <div className="mobile-intro-right">  
              <picture>
   <source 
      media="(max-width: 600px)"
      srcSet={Images.introLeftMobile}/>
    
   <img src={Images.introLeft}
   alt="intro-desktop"/>
</picture>
            </div>
             
              <div className="centerContent">
                
                <div className="text">
                  <hr />
                <h1>Humanizing your insurance.</h1>
                <p>Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that's right for you. Ensure you 
  and your loved ones are protected.</p>
   <button className="buttonLink"><Link to="/">VIEW PLANS</Link></button>
   </div>
   <div className="desktop-image"> 
    <picture>
      <source media="(max-width:600px )" srcSet={Images.introMobile} />
      <img src={Images.introDesktop} alt="DesktopImage" />
    </picture>
   </div>
    </div>
              <div className="images">
                <div className="pic2">
            <picture>
              <source media="(max-width:600px)" srcSet={Images.introRightMobile} />
               
              <img src={Images.introRight} alt="intro-right" />
            </picture>
           </div>
              </div>
        </div>
        </header>
        <Offer/>
        <Findmore/>
        <Footer/>
        </div>
    );
 }
 
 export default Home;
 