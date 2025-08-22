import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PastedTiles.css";

export default function PastedTiles() {
  const { state } = useLocation();
  const product = state?.product;
  const [area, setArea] = useState(""); // Single area input
  const [result, setResult] = useState(""); // Single result output

  const handleCalculate = () => {
    if (!product?.size || !area) return;

    const [w, h] = product.size.split("x").map((v) => parseInt(v));
    const tileAreaSqFt = (w * h) / 90000; // Convert mm² to ft²
    const tilesNeeded = Math.ceil(area / tileAreaSqFt);

    let boxesNeeded;
    const thickness = product.thickness;
    if (thickness === 9) {
      boxesNeeded = Math.ceil(tilesNeeded / 2);
    } else if (thickness === 15 || thickness === 18) {
      boxesNeeded = tilesNeeded;
    } else {
      boxesNeeded = Math.ceil(tilesNeeded / 2);
    }

    setResult(`For ${area} sq.ft, you need approximately ${boxesNeeded} box(es).`);
  };

  return (
    <div className="pasted-tiles">
      <div className="details">
        <h3 className="text-uppercase">{product?.name}</h3>
        <p><strong>Type:</strong> {product?.description}</p>
        <p><strong>Size:</strong> {product?.size}</p>
        <p><strong>Thickness:</strong> {product?.thickness}mm</p>

        {/* Calculator */}
        <div className="tile-calculator">
          <div className="area-input">
            <input
              type="number"
              placeholder="Enter area in sq.ft"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate
          </button>
          {result && <p className="result">{result}</p>}
        </div>
      </div>
      <img src={product?.imageDescription} alt={product?.name} />
    </div>
  );
}
