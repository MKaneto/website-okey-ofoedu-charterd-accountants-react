import React from 'react';
import './Footer.css'
import Button from './Button'
import Home from './Pages/Home'
import { Link } from 'react-router-dom';


function Footer() {
    return(
        // document.getElementById('currentYear').innerText = new Date().getFullYear(),
        <div className='footer-container'>           
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items footer-link-items-one'>
                        <h2>Quick Links</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/about-us'>About Us</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className='footer-link-items footer-link-items-two'>
                        <h2>Placeholder</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimony</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper-two'>
                    <div className='footer-link-items foot-link-items-three'>
                        <h2>Placeholder</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div className='footer-link-items footer-link-items-four'>
                        <h2>Reach out to Us</h2>
                        <table className='contact-table'>
                            <tr>
                                <td><i class="fas fa-mobile-alt"></i></td>
                                <td className='line-height'>
                                    <a href='tel:(+234) 803 338 8456'>(+234) 803 338 8456</a> <br/>
                                    <a href='tel:(+234) 818 492 7479'>(+234) 818 492 7479</a> <br/>
                                    <a href='tel:(+234) 905 976 8560'>(+234) 905 976 8560</a>
                                </td>
                            </tr>

                            <tr>
                                <td><i class="fas fa-envelope"></i></td>
                                <td>       
                                    <a>okeyofoeduh@yahoo.com</a> <br/>
                                    <a>joachinofoedu@gmail.com</a>
                                </td>
                            </tr>

                            <tr>
                                <td><i class="fas fa-map-marked-alt"></i></td>
                                <td><p>
                                        44 Old Aba Road, <br/>
                                        Rumuogba, Artillery, <br/>
                                        P.O Box 6777, Trans-Amadi <br/>
                                        Industrial Layout, <br/>
                                        Port Harcourt, Rivers State.
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className='social-media-wrap'>
                                    <div className='social-icons'>
                                        <Link className='social-icons-link facebook'
                                            to='/'
                                            target='_blank'
                                            aria-label='Facebook'
                                        >
                                            <i className='fab fa-facebook-f' />
                                        </Link>

                                        <Link className='social-icons-link instagram'
                                            to='/'
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <i className='fab fa-instagram' />
                                        </Link>

                                        <Link className='social-icons-link youtube'
                                            to='/'
                                            target='_blank'
                                            aria-label='Youtube'
                                        >
                                            <i className='fab fa-youtube' />
                                        </Link>

                                        <Link className='social-icons-link linkedin'
                                            to='/'
                                            target='_blank'
                                            aria-label='LinkedIn'
                                        >
                                            <i className='fab fa-linkedin' />
                                        </Link>

                                        <Link className='social-icons-link twitter'
                                            to='/'
                                            target='_blank'
                                            aria-label='Twitter'
                                        >
                                            <i className='fab fa-twitter' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className='website-rights'>Copyright &copy; 2021<span id="currentYear"></span> Okey Ofoedu & Co. Chattered Accountants.</div>
            
            <div className='footer-logo'>
                <Link className='social-logo' to={Home}>
                    <i className='fab fa-typo3' />
                </Link>
            </div>
        </div>
    );
    
// const textSpace = document.getElementById("currentYear");
// const currentYear  = new Date().getFullYear();

// textSpace.innerText = currentYear;
}


// const textSpace = document.getElementById("currentYear");
// const currentYear  = new Date().getFullYear();

// textSpace.innerText = currentYear;

export default Footer;