import { useState } from "react";
import "./Tiles.css";
import { useNavigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function Tiles() {
  const products = [
    {
      name: "Breccia Aurora",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Breccia Aurora.jpg",
      imageDescription: "/images/Tiles/Breccia Aurora Pasted.jpg"
    },
    {
      name: "Marvel Stone Grey",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Marvel Stone Grey.jpg",
      imageDescription: "/images/Tiles/Marvel Stone Grey Pasted.jpg"
    },
    {
      name: "Onyx Gold",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Onyx Gold.jpg",
      imageDescription: "/images/Tiles/Onyx Gold Pasted.jpg"
    },
    {
      name: "Roman Statuario",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Roman Statuario.jpg",
      imageDescription: "/images/Tiles/Roman Statuario pasted.jpg"

    },
    {
      name: "Roman Statuario",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Roman Statuario.jpg",
      imageDescription: "/images/Tiles/Breccia Aurora Pasted.jpg"
    },
    {
      name: "Signora",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Signora.jpg",
      imageDescription: "/images/Tiles/Signora pasted.jpg"
    },
    {
      name: "Spider Grey",
      size: "1200x1800mm",
      thickness: 15,
      description: "Vitrified Glossy",
      image: "/images/Tiles/Spider Grey.jpg", 
      imageDescription: "/images/Tiles/Spider Grey pasted.jpg"
    },
    {
      name: "Carrara White",
      size: "800x2400mm",
      thickness: 10,
      description: "Matte Finish",
      image: "",
      imageDescription:"/images/Tiles/Breccia Aurora Pasted.jpg"
    },
    {
      name: "Onyx Blue",
      size: "600x1200mm",
      thickness: 9,
      description: "Polished",
      image: "",
      imageDescription:"/images/Tiles/Breccia Aurora Pasted.jpg"
    }
  ];

  const [filterSize, setFilterSize] = useState("All");
  const navigate = useNavigate();

  const filteredProducts =
    filterSize === "All"
      ? products
      : products.filter((p) => p.size === filterSize);

  return (
    <div className="tiles-container">
      {/* <h2 className="tiles-heading">Tiles:</h2> */}

      {/* Filter */}
      <div className="filter-section">
        <label>Filter by Size:</label>
        <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)} >
          <option value="All">All</option>
           {[...new Set(products.map((p) => p.size))].map((size, idx) => (
            <option key={idx} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Tiles Grid */}
      <div className="tiles-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="tile-card" onClick={() => navigate("/pastedTiles", { state: { product } })}>
            <div className="tile-image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="placeholder">[Add Product Image]</div>
              )}
            </div>

            <div className="tile-info">
              <h3>{product.name}</h3>
              <p><strong>Type:</strong> {product.description}</p>
              <p><strong>Size:</strong> {product.size}</p>
              <p><strong>Thickness:</strong> {product.thickness} mm</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
