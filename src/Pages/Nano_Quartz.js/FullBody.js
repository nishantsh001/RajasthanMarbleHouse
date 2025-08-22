export default function FullBody() {
  const products = [
    {
      name:"Galaxy Pearl White",
      size:"800x2400",
      thickness:"15mm",
      description:"Vitrified Glossy Full-Body Stone",
      color:"White",
      image:"/images/nano and quartz/Galaxy Pearl White.jpg",
    }
  ];
  return (
    <div className="detail-page">
      <h1>Full-Body Stone</h1>
      <div className="image-container">
        <img src="/images/nano and quartz/full-body.jpg" alt="Full-Body" />
      </div>
      <p>
        Full-Body Stone is a premium surface material, ideal for <strong>interiors</strong>.
        It offers a sleek and elegant finish that enhances the aesthetics of any modern space. It is also suitable for <strong>stairs</strong>,
        <strong> pooja rooms</strong>, and can be customized for multiple purposes according to user needs.
      </p>

      <ul>
        <li>✅ Scratch & stain resistant</li>
        <li>✅ Glossy, mirror-like finish</li>
        <li>✅ Highly durable and long-lasting</li>
        <li>✅ Perfect for kitchens & interiors</li>
      </ul>
      <p><strong>Custom sizes available:</strong> We cut pieces according to your exact needs.</p>
    </div>
  );
}