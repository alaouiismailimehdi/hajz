import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-section brand-info">
                    <h2 className="footer-logo">HAJZ.MA</h2>
                    <p>Your premium gateway for flights, hotels, and car rentals in Morocco and beyond.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/Flight">Flights</Link></li>
                        <li><Link to="/Hotels">Hotels</Link></li>
                        <li><Link to="/Cars">Car Fleet</Link></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><Link to="/">Terms of Use</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📧 support@hajz.ma</p>
                    <p>📞 +212 5XX XX XX XX</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HAJZ.MA. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;