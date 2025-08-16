import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Logo</h2>
          <p>© {new Date().getFullYear()} My Store. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
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

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@mystore.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>
      </div>
    </footer>
  );
}
