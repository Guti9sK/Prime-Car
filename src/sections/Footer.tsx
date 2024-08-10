import Facebook from '../assets/images/logos--facebook.svg';
import Instagram from '../assets/images/logos--instagram.svg';
import Linkedin from '../assets/images/logos--linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer_links">
        <div className="footer_links_logo">
          <h2>PRIME CAR</h2>
        </div>
        <div className="footer_links_where">
          <h3>Where Are We</h3>
          <ul>
            <li><a href="#">Georgia</a></li>
            <li><a href="#">Texas</a></li>
            <li><a href="#">California</a></li>
            <li><a href="#">Virginia</a></li>
            <li><a href="#">Colorado</a></li>
            <li><a href="#">Pennsylvania</a></li>
            <li><a href="#">Massachusetts</a></li>
          </ul>
        </div>
        <div className="footer_links_quick">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer_links_email">
          <h3>Email Us</h3>
          <ul>
            <li><a href="#">contact@primecar.com</a></li>
          </ul>
        </div>
        <div className="footer_links_call">
          <h3>Call Us</h3>
          <ul>
            <li><a href="#">+999-999-9999</a></li>
            <li><a href="#">+111-111-1111</a></li>
          </ul>
          <div className="footer_links_call_social">
             <div className="facebook"><img src={Facebook} /></div>
             <div className="linkedin"><img src={Linkedin} alt="linkedin-icon" /></div>
             <div className="instagram"><img src={Instagram} alt="instagram-icon" /></div>
          </div>
        </div>
       </div>
       <div className="footer_copy">
        <div className="footer_copy_terms">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="copy">
          <p> Copyright © 2024 Prime Car. All Rights Reserved.</p>
        </div>
       </div>
    </footer>
  );
};

export default Footer;
