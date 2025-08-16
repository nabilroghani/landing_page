import "./Home.css";

export default function Home({ name, price, img }) {
  return (
    <div className="card">
      <img
        src={img}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
    </div>
  );
}
