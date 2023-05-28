import React from 'react';
import ChatBox from './ChatBox';

// Footer Component
const Footer = ({ userInfo }) => (
    <footer className="footer">
        <div className="footer-section">
            <h3>Buy</h3>
            <div className="footer-links">

                <a href="/registration">Registration</a>
                <a href="/terms">Terms and Regulations</a>
                {/* Add other footer links as needed */}
            </div></div>
        <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
            <p>Address: 123 Street, City, Country</p>
        </div>

        <div className="footer-section">
            <h3>About Us</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit commodo metus, ac bibendum arcu faucibus
                ut. Nam aliquam risus ligula, non hendrerit elit congue ac.
            </p>
        </div>

        <div className="footer-section">
            <h3>Company History</h3>
            <p>Curabitur blandit nulla id aliquam vehicula. Fusce in tellus ex. Nunc facilisis dolor sed malesuada pellentesque.</p>
        </div>

        {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}


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

        <div className="footer-bottom">
            <p>All rights reserved &copy; 2023 Company Name</p>
        </div>
    </footer>
);

export default Footer;
