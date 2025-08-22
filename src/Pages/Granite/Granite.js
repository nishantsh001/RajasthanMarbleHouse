import "./Granite.css";
import { useState } from "react";

export default function Granite() {
  const products = [
    {
      name: "Ice Blue",
      size: "121x39in",
      thickness: "16mm",
      description: "Polished (size may vary)",
      color: "blue",
      image: "/images/Granite/Ice Blue.jpg",
    },
       {
      name: "Blue Lapotra",
      size: "121x39in",
      thickness: "16mm",
      description: "Anti-Skid (size may vary)",
      color: "blue",
      image: "/images/Granite/Ice Blue.jpg",
    },
    {
      name: "Galaxy Black",
      size: "108x30 in|35x75 in",
      thickness: "16mm",
      description: "Polished (size may vary)",
      color: "black",
      image: "/images/absolute-black.jpg",
    },
    {
      name: "Moon White",
      size: "128x37 in",
      thickness: "16mm",
      description: "Polished (size may vary)",
      color: "white",
      image: "/images/moon-white.jpg",
    },
      {
      name: "Levender (srikakulam)",
      size: "121x42 in",
      thickness: "16mm",
      description: "Polished",
      color: "white",
      image: "/images/Granite/Levender.jpg",
    },
      {
      name: "Ladoo",
      size: "107x38 in",
      thickness: "16mm",
      description: "Anti-Skid (size may vary)",
      color: "black",
      image: "/images/moon-white.jpg",
    },
  ];

  const [filterColor, setFilterColor] = useState("all");
  const [sortAlpha, setSortAlpha] = useState(false);

  // Filtered products
  let filteredProducts =
    filterColor === "all"
      ? products
      : products.filter((product) => product.color === filterColor);

  // Sort alphabetically if enabled
  if (sortAlpha) {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="granite-container">
      <div className="granite-filters">
        <label>Filter by Color:</label>
        <select
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}
        >
          <option value="all">All</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="black">Black</option>
        </select>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="checkbox"
            checked={sortAlpha}
            onChange={(e) => setSortAlpha(e.target.checked)}
          />{" "}
          Sort A-Z
        </label>
      </div>

      <div className="granite-grid">
        {filteredProducts.map((product, index) => (
          <div className="granite-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              <strong>Size:</strong> {product.size}
            </p>
            <p>
              <strong>Thickness:</strong> {product.thickness}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
