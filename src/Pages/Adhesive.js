import { FaQuestionCircle, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

export default function Adhesive() {
  const products = [
    {
      name: "UltraTech 315 Cement",
      description: "High-performance tile adhesive for strong bonding and long-lasting results.",
      why: "Prevents cracks, tile loosening, and ensures durability even in high-moisture areas.",
      when: "Ideal for bathrooms, kitchens, outdoor tiling, and large-format tiles.",
      image: "/images/ultratech.jpg" 
    },
    {
      name: "T02 Roff Cement",
      description: "Premium-grade cement adhesive designed for strong and durable tile installation.",
      why: "Offers excellent bonding strength and resistance to moisture, reducing the risk of tile detachment.",
      when: "Perfect for indoor and outdoor tiling in both residential and commercial projects.",
      image: "/images/rofft02.jpg" 
    },
    {
      name: "Epoxy (5kg & 1kg)",
      description: "Premium waterproof epoxy adhesive available in multiple shades.",
      why: "Provides maximum strength, water resistance, and stain protection for tile joints.",
      when: "Best for swimming pools, kitchens, bathrooms, and commercial flooring.",
      image: "/images/epoxyroff.jpg" 
    },
    {
      name: "Roff Grout (1kg)",
      description: "Durable, color-matched grout for a clean and elegant tile finish.",
      why: "Fills gaps between tiles, prevents water seepage, and enhances appearance.",
      when: "Suitable for all types of wall and floor tiles, indoors and outdoors.",
      image: "/images/grout.jpg" 
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#fafafa" }}>
      <h2 style={{ color: "#222", marginBottom: "20px", textAlign: "center" }}>Adhesives & Grouts</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            {/* Product Image */}
            <div style={{ width: "100%", height: "200px", backgroundColor: "#f0f0f0" }}>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#777"
                  }}
                >
                  [Add Product Image]
                </div>
              )}
            </div>

            {/* Product Details */}
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#444" }}>{product.name}</h3>
              <p><FaQuestionCircle style={{ color: "#007BFF" }} /> <strong>What:</strong> {product.description}</p>
              <p><FaCheckCircle style={{ color: "#28a745" }} /> <strong>Why:</strong> {product.why}</p>
              <p><FaCalendarAlt style={{ color: "#ff9800" }} /> <strong>When:</strong> {product.when}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
