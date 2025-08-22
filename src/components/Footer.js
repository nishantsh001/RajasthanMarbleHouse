import './Footer.css';
import { ImLocation2 } from "react-icons/im";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaComment } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="footer-info">
          <h3>Rajasthan Marble House</h3>
          <p>Specializing in premium Tiles, and Granite since 2005</p>
        </div> */}
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><i className="fa-phone"></i><VscCallOutgoing /> +91 944 089 1297,<i class="fa-solid fa-comments"></i><FaComment /> +91 935 474 7735   </p>
          <p><i className="fa-map-marker-alt"></i><ImLocation2 /> Sy No 19, near Bharat Petrol pump, Ramachandrapuram, Telangana 502032</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2005-{new Date().getFullYear()} Rajasthan Marble House. All rights reserved.</p>
      </div>
    </footer>
  );
}
