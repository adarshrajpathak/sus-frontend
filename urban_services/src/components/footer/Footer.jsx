import React from 'react';
import './footer.css';
import longlogo from '../../assets/LogoUrbanServicesLong.png';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import playStore from "../../assets/play_store_badge_web_generic.png";
import appleStore from "../../assets/badge-download-on-the-app-store.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={longlogo} alt="USlonglogo" className="footer-logo" />
            <div className="footer-content">
                <div className="footer-section company">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Terms & conditions</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Anti-discrimination policy</a></li>
                        <li><a href="#">US impact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-section customers">
                    <h3>For customers</h3>
                    <ul>
                        <li><a href="#">US reviews</a></li>
                        <li><a href="#">Categories near you</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-section partners">
                    <h3>For partners</h3>
                    <ul>
                        <li><a href="#">Register as a professional</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Social links</h3>
                    <ul className="social-links">
                        <li><a href="#"><XIcon/></a></li>
                        <li><a href="#"><FacebookIcon/></a></li>
                        <li><a href="#"><InstagramIcon/></a></li>
                        <li><a href="#"><WhatsAppIcon/></a></li>
                    </ul>
                    <div className="app-links">
                        <a href="#">
                            <img src={appleStore} alt="App Store"/>
                        </a>
                        <a href="#">
                            <img src={playStore} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Urban Services. All rights reserved. | CIN: U74140DL2014PTC274413</p>
            </div>
        </footer>
    );
};

export default Footer;
