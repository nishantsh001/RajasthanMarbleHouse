import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Granite from "./Pages/Granite/Granite";
import Adhesive from "./Pages/Adhesive";
import Wooden from "./Pages/Wooden/Wooden";
import Tiles from "./Pages/Tiles/Tiles";
import NanoQuartzSelection from "./Pages/Nano_Quartz.js/NanoQuartzSelection";
import PastedTiles from "./Pages/Tiles/PastedTiles";
import Nano from "./Pages/Nano_Quartz.js/Nano";
import Quartz from "./Pages/Nano_Quartz.js/Quartz";
import PastedTilesWooden from "./Pages/Wooden/PastedTilesWooden";

function Home() {
  return (
    <section id="home">
      <h1>About Us:</h1>

      <h2>
        At <strong>Rajasthan Marble House</strong>, we've delivered top-quality <strong>vitrified </strong>tiles and granites since 2005.
      </h2>

      <p>
        We offer a wide range of elegant, durable building materials, tailored to suit every customer's needs.
        Our specialty lies in custom-cut<strong> Nano White and Quartz stones</strong> — a service few provide.
      </p>

      <p>
        In addition to premium tiles and granites, we supply trusted fixing products like
        <strong> epoxy grouts</strong> and <strong>Laticrete adhesives</strong>, and provide
        <strong> skilled craftsmen</strong> for professional installation.
      </p>

      <p>
        Built on trust, craftsmanship, and customer-first service, we're the preferred choice of homeowners, architects, and builders across the region.
      </p>
      <section id="products">
        <Products />
      </section>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/granite" element={<Granite />} />
            <Route path="/wooden" element={<Wooden />} />
            <Route path="/pastedTilesWooden" element={<PastedTilesWooden />} />
            <Route path="/tiles" element={<Tiles />} />
            <Route path="/pastedTiles" element={<PastedTiles />} />
            <Route path="/nanoQuartzSelection" element={<NanoQuartzSelection />} />
            <Route path="/full-body" element={<Nano />} />
            <Route path="/nano" element={<Nano />} />
            <Route path="/quartz" element={<Quartz />} />
            <Route path="/adhesives" element={<Adhesive />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
