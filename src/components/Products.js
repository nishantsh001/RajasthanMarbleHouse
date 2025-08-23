import { Link } from "react-router-dom";
import "./Products.css";

// export default function Products() {
//   return (
//     <div className="products-page">
//       <h1>Our Products:</h1> 
//       <p>Explore our wide range of tiles, granites, Nano White, Quartz, Adhesives, and more.</p>

//       <div className="product-list" style={{ paddingTop: "20px" }}>
//         <a href="/granite" className="product-card" >
//           <img className="product-image" src="/images/granite.jpg" alt="Granite" />
//           <h3>Granite</h3>
//           <p>Premium quality granite available starting at<strong> ₹70/sqft</strong> in RC Puram, Hyderabad.</p>
//         </a>
//         <a href="/wooden" className="product-card">
//           <img className="product-image" src="/images/wooden.jpg" alt="Wooden Tiles" />
//           <h3>Wooden Tiles</h3>
//           <p>Durable and stylish tiles, available in multiple colors.</p>
//         </a>
//         <a href="/tiles" className="product-card">
//         <img className="product-image" src="/images/Tiles.jpg" alt="Tiles" />
//           <h3>Tiles (Flooring and Wall)</h3>
//           <p>Durable and stylish tiles, available in multiple sizes and thickness, Starting at just rupee <strong>50/sqft</strong></p>
//         </a>
//         <a href="/NanoQuartzSelection" className="product-card">
//         <img className="product-image" src="/images/NanoWhite.jpg" alt="Nano and Quartz" />
//           <h3>Nano White(Custom Cut), Quartz (Custom Cut), Full-Body, and more</h3>
//           <p>Cut to your specific sizes — unmatched in the market, Starting at just rupee <strong>150/sqft</strong></p>
//         </a>
//         <a href ="/adhesives" className="product-card">
//           <img className="product-image" src="/images/epoxy.jpg" alt="Adhesive" />
//           <h3>Epoxy & Laticrete Adhesives</h3>
//           <p>Trusted adhesives for tile and granite fixing.</p>
//         </a>
//       </div>
//     </div>
//   );
// }
export default function Products() {
  return (
    <div className="products-page">
      <h1>Our Products:</h1> 
      <p>Explore our wide range of tiles, granites, Nano White, Quartz, Adhesives, and more.</p>

      <div className="product-list" style={{ paddingTop: "20px" }}>
        <Link to="/granite" className="product-card">
          {/* <img className="product-image" src="/images/granite.jpg" alt="Granite" /> */}
          <img className="product-image" src={`${process.env.PUBLIC_URL}/images/granite.jpg`} alt="Granite" />
          <h3>Granite</h3>
          <p>Premium quality granite available starting at<strong> ₹70/sqft</strong> in RC Puram, Hyderabad.</p>
        </Link>

        <Link to="/wooden" className="product-card">
          {/* <img className="product-image" src="/images/wooden.jpg" alt="Wooden Tiles" /> */}
          <img className="product-image" src={`${process.env.PUBLIC_URL}/images/wooden.jpg`} alt="Wooden Tiles" />
          <h3>Wooden Tiles</h3>
          <p>Durable and stylish tiles, available in multiple colors.</p>
        </Link>

        <Link to="/tiles" className="product-card">
          {/* <img className="product-image" src="/images/Tiles.jpg" alt="Tiles" /> */}
          <img className="product-image" src={`${process.env.PUBLIC_URL}/images/Tiles.jpg`} alt="Wooden Tiles" />
          <h3>Tiles (Flooring and Wall)</h3>
          <p>Durable and stylish tiles, available in multiple sizes and thickness, Starting at just rupee <strong>50/sqft</strong></p>
        </Link>

        <Link to="/nanoQuartzSelection" className="product-card">
          {/* <img className="product-image" src="/images/NanoWhite.jpg" alt="Nano and Quartz" /> */}
          <img className="product-image" src={`${process.env.PUBLIC_URL}/images/NanoWhite.jpg`} alt="Wooden Tiles" />
          <h3>Nano White(Custom Cut), Quartz (Custom Cut), Full-Body, and more</h3>
          <p>Cut to your specific sizes — unmatched in the market, Starting at just rupee <strong>150/sqft</strong></p>
        </Link>

        <Link to="/adhesives" className="product-card">
          {/* <img className="product-image" src="/images/epoxy.jpg" alt="Adhesive" /> */}
          <img className="product-image" src={`${process.env.PUBLIC_URL}/images/epoxy.jpg`} alt="Wooden Tiles" />
          <h3>Epoxy & Laticrete Adhesives</h3>
          <p>Trusted adhesives for tile and granite fixing.</p>
        </Link>
      </div>
    </div>
  );
}