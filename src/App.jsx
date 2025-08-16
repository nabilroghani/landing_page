import Home from "./Home";
import Footer from "./Footer";

function App() {
  const products = [
    { productName: "Laptop", price: 300, Image: "./assets/laptop.jpg" },
    { productName: "Watch", price: 670, Image: "./assets/watch.jpg" },
    { productName: "Speaker", price: 700, Image: "./assets/speaker.jpg" },
    { productName: "Phone", price: 560, Image: "./assets/phone.jpg" },
    { productName: "Laptop", price: 300, Image: "./assets/laptop.jpg" },
    { productName: "Watch", price: 670, Image: "./assets/watch.jpg" },
    { productName: "Speaker", price: 700, Image: "./assets/speaker.jpg" },
    { productName: "Phone", price: 560, Image: "./assets/phone.jpg" },
    { productName: "Laptop", price: 300, Image: "./assets/laptop.jpg" },
  ];

  return (
    <div>
      <section>
        <div className="nav-bar">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="nav-btn">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="main">
        <div className="card-container">
          {products.map((item, index) => (
            <Home
              key={index}
              name={item.productName}
              price={item.price}
              img={item.Image}
            />
          ))}
        </div>
      </section>

      <section className="footer">
        <div></div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
