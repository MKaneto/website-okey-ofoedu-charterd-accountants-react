import React from 'react';
// import '../App.css';
import './HeroSection.css';
// import { Button } from './Button';


function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='first-side'>
                <h1>OKEY OFOEDU & CO.</h1>
                <h3>CHATTERED ACCOUNTANTS</h3>
                <div className='hr-padding'>
                    <hr />
                </div>
                <p>
                    We believe that audit and accounting services should not just be a
                    compliance exercise, but should provide valuable business advice based
                    on the broad skills of a highly talented team of professionals.

                </p>
                <button> Know More About Us </button>
                <p>
                    <a href='#section-two'>
                        {/* <i class="fas fa-angle-down"></i> */}
                        {/* <i class="fas fa-chevron-circle-down"></i> */}
                        {/* <i class="fas fa-chevron-down"></i> */}
                        {/* <i class="fas fa-arrow-down"></i> */}
                        <i class="fas fa-angle-double-down"></i>
                
                    </a>
                </p>
            </div>
        </div>
    );
}

export default HeroSection;