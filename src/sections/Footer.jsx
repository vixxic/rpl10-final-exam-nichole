import "../styles/Footer.css";
import { FaArrowRight } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer outfit-font">
      <div className="footer-links">
        <div className="footer-link-div div1">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="logo" style={{ margin: 0 }}>
              team<span>.</span>
            </h1>
            <p>
              Collaboration platform <br />
              for mordern team
            </p>
          </div>
        </div>

        <div className="footer-link-div div2">
          <h2>Company</h2>
          <ul>
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-link-div div3">
          <h2>Features</h2>
          <ul>
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Management</li>
          </ul>
        </div>

        <div className="footer-link-div div4">
          <h2>Contact Us</h2>
          <ul>
            <li>info@teamapp.com</li>
            <li>1-800-200-300</li>
            <li>1010 Sunset Blv. Palo Alto, California</li>
          </ul>
        </div>

        <div className="footer-link-div div5">
          <h2>Stay up to date</h2>
          <ul>
            <li>Subscribe to our newseller</li>
          </ul>
          <div className="email-box">
            <span>Email</span>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        style={{
          style: "10vw",
          height: "11vw",
          display: "flex",
          alignItems: "end",
        }}
      >
        <p style={{ fontSize: "clamp(0.75rem, 1.1vw, 2.1rem)" }}>
          © Copyright Team Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
