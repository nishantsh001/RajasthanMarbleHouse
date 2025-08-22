import { Link } from "react-router-dom";
import "./NanoQuartzSelection.css";
import Nano from "./Nano";
export default function NanoQuartzSelection() {
  return (
    <div className="nano-quartz-container">
    <h1>Select Your Stone:</h1>
      <Link to="/nano" className="stone-card">
        <img src="./images/nano and quartz/Nano White.jpg" alt="Nano White" />
        <h2>Nano White</h2>
        <p>Perfect for Kitchen Platforms</p>
      </Link>

      <Link to="/quartz" className="stone-card">
        <img src="./images/nano and quartz/Quartz.jpg" alt="Quartz" />
        <h2>Quartz</h2> 
        <p>Elegant & Durable for Interiors</p>
      </Link>

      <Link to="/full-body" className="stone-card">
        <img src="./images/nano and quartz/full-body.jpg" alt="Full-Body" />
        <h2>Full-Body</h2> 
        <p>Elegant & Durable for Interiors</p>
      </Link>

      <Link to="/print-body" className="stone-card">
        <img src="./images/nano and quartz/print-body.jpg" alt="Print-Body" />
        <h2>Half-Body</h2> 
        <p>Elegant & Durable for Interiors</p>
      </Link>
    </div>
  );
}
