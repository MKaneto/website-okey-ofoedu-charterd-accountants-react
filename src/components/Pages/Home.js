import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import '../Pages/Home.css'
import HeroSection from '../HeroSection';


function Home() {
    return (
        <div>
            <HeroSection/>
            
            <div className='section-one'>  
                <h2>CORE AUDITING & ACCOUNTING SERVICES:</h2>
            </div>

            <div className='section-two'>
                <div className='section-two-left'>
                </div>

                <div className='section-two-right'>
                    <ul>
                        <li>Agreed-upon Procedures</li>
                        <li>Due Diligence</li>
                        <li>Audits</li>
                        <li>Compilations</li>
                        <li>Reviews</li>
                        <li>Financial Forecasting</li>
                        <li>Risk Assessment and Internal Control Reviews</li>
                    </ul>
                </div>
            </div>

            <div className='space'></div>

            <div className='section-three'>
                <p>
                    Elevate your organization's audit, accounting and management needs and goals today 
                    and take the lead now with 
                    <span> Okey Ofoedu & Co. </span>
                    giving you valuable insights on important developments affecting your business.
                </p>
                <button>Reach out to Us</button>
            </div>
            <div className='section-four'>
                <h2>PARTNERS</h2>
                <p>We've had the pleasure of working with a few organizations...</p>
                <div className='clients'>
                    <p>SHAWSAND MEDICAL CENTER</p>
                    <p>OGINIBA INVESTMENT COMPANY</p>
                    {/* <p></p>
                    <p></p>
                    <p></p> */}
                </div>
                {/* <p>Sandshaw</p>
                <p>Oginigba Investment</p> */}
            </div>
            {/* <Slideshow/> */}
            {/* <Cards /> */}
        </div>
    );
}


export default Home;



            {/* <div>
                <h2>Automatic Slideshow</h2>
                <p>Change image every 2 seconds:</p>

                <div className='slideshow-container'>

                    <div className='mySlides fade'>
                        <div className="numbertext">1 / 3</div>
                            <img src='images/img-1' />
                        <div className="text">Caption Text</div>
  7                  </div>

                    <div className='mySlides fade'>
                        <div className="numbertext">2 / 3</div>
                            <img src='images/img-4' />
                        <div className="text">Caption Two</div>
                    </div>

                    <div className='mySlides fade'>
                        <div className="numbertext">3 / 3</div>
                            <img src='images/img-3.jpg' />
                        <div className="text">Caption Three</div>
                    </div>

                </div>

                <div className='slides'>
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                </div>
            </div> */}




// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

