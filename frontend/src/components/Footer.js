import React from 'react';
import { Link } from 'react-router-dom';
import { redirect } from '../../node_modules/react-router-dom/dist/index';


// Footer Component
const Footer = () => (
    <footer className="fotter">
        <div className="footer">
            <div className="footer-section">
                <h3>Buy</h3>
                <div className="footer-links">

                    <a href="/registration">Registration</a>
                    <Link to={`/register?redirect=${redirect}`}>Registration</Link>
                    <a href="/terms">Terms and Regulations</a>
                    {/* Add other footer links as needed */}
                </div></div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
                <p>Address: 123 Street, City, Country</p>
            </div>



            <div className="footer-links">
                <h3>Company History</h3>
                <a href="aboutus">About Us</a>
                <a href="aboutus">Blog</a>
                <a href="aboutus">About Us</a>
                <a href="aboutus">About Us</a>
                <a href="aboutus">About Us</a>

            </div>


            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i> Facebook
                    </a><br />
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i> Twitter
                    </a><br />
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i> Instagram
                    </a><br />
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i> Linkedin
                    </a><br />
                </div>
            </div>


        </div>
        <div className="footer-bottom">
            <p>All rights reserved &copy; 2023 Habesha E-commerce </p>
        </div>

    </footer>
);

export default Footer;
