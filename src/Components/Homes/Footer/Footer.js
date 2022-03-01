import React from 'react';
import facebook from '../../../icons/facebook.png';
import twitter from '../../../icons/twitter.png';
import instagram from '../../../icons/instagram.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='FooterBody'>

            <section className="footer">
                <div className="footer-item">
                    <div>
                        <h4 className="footer-agency">Hotel</h4>
                    </div>
                    <div className="container">
                        <h5>Menu</h5>
                        <p><Link to="">About</Link></p>
                        <p><Link to="">Service</Link></p>
                        <p><Link to="">Blog</Link></p>
                        <p><Link to="">Contact</Link></p>
                    </div>
                    <div className="container">
                        <h5>Service</h5>
                        <p><Link to="">Design</Link></p>
                        <p><Link to="">Development</Link></p>
                        <p><Link to="">Marketing</Link></p>
                        <p><Link to="">see more</Link></p>
                    </div>
                    <div className="social-icons">
                        <div>
                            <Link to=""><img src={facebook} alt="" /></Link>
                        </div>
                        <div>
                            <Link to=""><img src={twitter} alt="" /></Link>
                        </div>
                        <div>
                            <Link to=""><img src={instagram} alt="" /></Link>
                        </div>

                    </div>
                </div>

                <div className="copy-right-section">
                    <div className="copy-right-item">
                        <p>Copy right &copy; 2022 Laaqiq. All Rights Reserved</p>
                    </div>

                    <div className="terms-and-condition">
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;