import { useNavigate } from "react-router-dom";
import "./Wooden.css";

export default function Tiles() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Honey Wood Brown",
      size: "200x1200mm(5 tiles/box)",
      thickness: "9mm",
      description: "Rough",
      image: `${process.env.PUBLIC_URL}/images/Wooden/Honey Wood Brown.jpg`,
      imageDescription: ""
    },
    {
      name: "Red Cedar",
      size: "200x1200mm(5 tiles/box)",
      thickness: "9mm",
      description: "Rough",
      image: '${process.env.PUBLIC_URL}/images/Wooden/Red Cedar.jpg',
      imageDescription: ""
    }
  ];

  return (
    <div className="Tiles-Grid">
      <div className="tiles-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="tile-card"
            onClick={() => navigate("/pastedTilesWooden", { state: { product } })}
          >
            <div className="tile-image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="placeholder">[Add Product Image]</div>
              )}
            </div>

            <div className="tile-info">
              <h3>{product.name}</h3>
              <p>
                <strong>Type:</strong> {product.description}
              </p>
              <p>
                <strong>Size:</strong> {product.size}
              </p>
              <p>
                <strong>Thickness:</strong> {product.thickness}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
