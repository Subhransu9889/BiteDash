import React from 'react'
import {faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Mail, MapPin, Phone } from 'lucide-react'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className='footer-content' id='footer'>
                <div className='footer-content-container'>
                    <div className='footer-upper-content'>

                        {/* About Section */}
                        <div>
                            <img src='/BiteDash.png' alt='logo' className='footer-logo'/>
                            <p className="text-gray-400">
                                We deliver the best food from top restaurants to your doorstep.
                            </p>
                        </div>

                        {/*Company Section*/}
                        <div>
                            <h2 className='footer-section-heading'>Company</h2>
                            <ul className='footer-list'>
                                <a href='/about' className='footer-list-item'>About Us</a>
                                <li className='footer-list-item'>Careers</li>
                                <Link to='/about#blog' className='footer-list-item'>Blog</Link><br/>
                                <Link to='/termsandconditions' className='footer-list-item'>Terms & Conditions</Link>
                                <li className='footer-list-item'>Privacy Policy</li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h2 className='footer-section-heading'>Contact Us</h2>
                            <div className='contact-us-mappin'>
                                <MapPin size={18} />
                                <span>123, Food Street, Bhubaneswar, India</span>
                            </div>
                            <div className='contact-us-phone'>
                                <Phone size={18} />
                                <span>+123 456 7890</span>
                            </div>
                            <div className='contact-us-mail'>
                                <Mail size={18} />
                                <span>support@BiteDash.com</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h2 className='footer-section-heading'>Follow Us</h2>
                            <div className="flex gap-4">
                                <a href="#" className='footer-facebook'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className='footer-instagram'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#" className='footer-twitter'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className='copyright'>
                        &copy; {new Date().getFullYear()} <span className='text-white'>BiteDash</span>. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer