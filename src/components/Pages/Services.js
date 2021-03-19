import React from 'react';
import '../../App.css';
import '../Pages/Services.css';

function Services(){
    return( 
        <div className='services'>
            <div className='services-hero-section'>
                <div className='services-header'>
                    <h2>SERVICES</h2>
                </div>
            </div>

            <div className='services-section-one'>
                <p>
                    Elevate your organization's audit, accounting and management needs and goals today and take the lead now with  
                    <span>Okey Ofoedu and Co</span> giving you valuable insights on important developments affecting your business.       
                </p>
            </div>

            <div className='services-section-two'>
                <div className='services-section-two-left'>
                    <div className='services-section-two-left-layer'></div>
                </div>

                <div className='services-section-two-right'>
                    <h2>CORE AUDIT AND ACCOUNTING SERVICES</h2>
                    <ul>
                        <li>AUDIT</li>
                        <li>REVIEWS</li>
                        <li>COMPILATIONS</li>
                        <li>AGREED-UPON PROCEDURES</li>
                        <li>DUE DILIGENCE</li>
                        <li>FINANCIAL FORECASTING</li>
                        <li>RISK MANAGEMENT AND INTERNAL CONTROL REVIEWS</li>
                    </ul>
                </div>
            </div>

            <div className='services-section-three'>
                <div className='services-section-three-left'>
                    <p>
                        We pride ourselves on providing quality service to every client. <br/>
                        In providing unique solutions, we help our clients to focus more on achieving their organizational goals and less
                        on accounting issues. With our deep industry experience with specialized tax knowledge, we are able to help clients
                        uncover sights, mitigate risk and understand potential business opportunities.<br/> We mind our clients' compliance 
                        worries; ensuring our business owners can focus on minding their business.
                    </p>
                </div>

                <div className='services-section-three-right'>
                </div>
            </div>

            <div className='services-section-four'>
                <div className='services-section-four-left'>
                </div>

                <div className='services-section-four-right'>
                    <h2>OTHER SERVICES</h2>
                    <ul>
                        <li>BUSINESS CONSULTING</li>
                        <li>TAXATION</li>
                        <li>INVESTIGATION</li>
                    </ul>
                </div>
            </div>
           
            <div>

            </div>
        </div>
    );
} 

export default Services;