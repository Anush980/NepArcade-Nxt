'use client';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe, FaGlobeAsia } from 'react-icons/fa';


export default function Footer() {
    const handleSubscribe = (e) => {
        e.preventDefault();
    }
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>NepArcade</h3>
                    <p>
                        Your ultimate destination for nepali board game lover. Discover,
                        play, and connect with friends.
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/anush980/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anush232" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/anush232/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://react-portfolio-jade-tau.vercel.app/" target="_blank" rel="noopener noreferrer"><FaGlobeAsia /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Friends</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to get updates on new games.</p>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input type="email" placeholder="Your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}