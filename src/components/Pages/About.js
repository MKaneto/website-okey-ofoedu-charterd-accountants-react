import React from 'react';
import '../../App.css';
import './About.css';
import boss from '../../images/img-13.jpg';

function About(){
    return (
        <div className='about'> 
            <div className='about-hero-section'>
                <div className='about-header'>
                    <h2>ABOUT</h2>
                </div>
            </div>

            <div className='about-section-one'>
                <div className='about-section-one-left'>
                    <img src={boss} alt='boss'/>
                </div>
                <div className='about-section-one-right'>
                    <p>
                        As organizations around the world rapidly enact their crises recovery plans
                        at a time of such exceptional uncertainties as the COVID-19 Pandemic, there continues to be a need to give clients, 
                        regulators and other stakeholders relevant and timely information about operational and financial performance.
                    <br/> <br/>
                        Since 1993 Okey Ofoedu and Co, has evolved as a reputable firm of professional and formidable Chartered Accountants; 
                        contributing its quota to overall development and growth of her clients through rendering of qualitative services and
                        even beyond the traditional confines of the profession.
                    </p>

                    <br/>                   
                </div>
            </div>

            <div className='about-section-two-container'>
                <div className='about-section-two'>
                    <div className='about-section-two-left'>
                        <p>
                            With solid understanding of the purpose of every engagement, reporting deadlines, and expectations of client management
                            team and the board of directors, a detailed engagement plan that is clearly focused on meeting the needs of management 
                            and other stakeholders are developed.
                        </p>

                        <p>
                            Together with our reliable and professional team of professionals, we continue to achieve and exceed the requirements 
                            of the relevant professional standards, by using a holistic approach to ensure that the evolving needs and requirements
                            of our clients are effectively and objectively met. 
                        </p>

                        <p>
                            On every engagement, we consider clients business objectives, risks, processes and controls related to those risks, as
                            well as proactive communication with client regarding our findings and recommendations.
                        </p>
                    </div>
                    

                    <div className='about-section-two-right'>   
                        <p>
                            Our relationship with our clients is enhanced by the extensive involvement of our firm's partners, ensuring that clients
                            have direct and immediate access to professionals with a deep understanding of the issues impacting her business. 
                        </p>

                        <p>
                            Our experience over the years enables us to customize audit procedures that truly reflect business risks, as well as 
                            providing practical solutions to your business issues. This including but not limited to:
                        </p>

                        <ul>
                            <li>Interpretation and application of complex accounting standards</li>
                            <li>Enterprise risk assessment</li>
                            <li>Internal control design, implementation and testing</li>
                            <li>Benchmarking business performance</li>
                            <li>Transitions to IFRS</li>
                            <li>Compliance with rules and regulations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;