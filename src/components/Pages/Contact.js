import React from 'react';
// import Button from '../Button';
import './Contact.css';
import '../../App.css';

function Contact() {
    return(
        <div>            
            <div className='contact-bg-image'>
                <h1>Contact Us</h1>
                {/* <hr/> */}
            </div>

            <div className='contact'>
                <div className='contact-first-section'>
                    <h3>Get In Touch</h3>
                    <hr/>
                    <p>
                        Hello.. Kindly reach out to us for any questions you may have about our services
                    </p>
                </div>   

                <div className='contact-second-section'>
                    <div className='contact-left-side'>
                        <div className='contact-wrapper-one'>
                            <table>
                                <div className='contact-box'>
                                    <h2><i class="fas fa-mobile-alt"></i></h2>
                                    <tr>
                                        <td><a className='contact-left-side-items-email-link' href='tel:(+234) 803 338 8456'>(+234) 803 338 8456</a></td>
                                    </tr>
                                    <tr>
                                        <td><a className='contact-left-side-items-email-link' href='tel:(+234) 818 492 7479'>(+234) 818 492 7479</a></td>
                                    </tr>
                                    <tr>
                                        <td><a className='contact-left-side-items-email-link' href='tel:(+234) 905 976 8560'>(+234) 905 976 8560</a></td>
                                    </tr>    
                                </div>
                                
                                <div className='contact-box'>
                                    <h2><i class="fas fa-map-marked-alt"></i></h2>
                                    <tr>
                                        <td>44 Old Aba Road, Rumuogba, Artillery, <br/>
                                            P.O Box 6777, Trans-Amadi Industrial Layout,<br/>
                                            Port Harcourt, Rivers State.
                                        </td>
                                    </tr>
                                </div>
                            </table>
                        </div>
                        <div className='contact-wrapper-two'>
                            <table>
                            <div className='contact-box'>
                                    <h2><i class="fas fa-envelope"></i></h2>
                                    <tr>
                                        <td><a className='contact-left-side-items-email-link' href='mailto:joachinofoedu@gmail.com'>joachinofoedu@gmail.com</a></td>
                                    </tr>
                                    <tr>
                                        <td><a className='contact-left-side-items-email-link' href='mailto:okeyofoeduh@yahoo.com'>okeyofoeduh@yahoo.com</a></td>
                                    </tr>
                                </div>
                                
                                <div className='contact-box'>
                                    <h2><i class="fas fa-user-tie"></i></h2>
                                    <tr>
                                        <td>Monday - Friday</td>
                                    </tr>
                                    <tr>
                                        <td>8am - 5pm</td>
                                    </tr>
                                </div>
                            </table>
                        </div>
                    </div>

                    <div className='contact-right-side'>
                        <form>                            
                            {/* <hr className='hr'/> */}
                            <h2>Send us a Message <span className='dot'>.</span> </h2>
                            <div className='form-name'>
                                <input className='input name-input' type='first-name' placeholder='First Name'/>
                                <input className='input name-input' type='last-name' placeholder='Last Name'/>
                            </div>
                            <input className='input' type='email' placeholder='Your Email'/>
                            <textarea className='input' placeholder='Your Message'></textarea>
                            <button className='button'> SUBMIT </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;