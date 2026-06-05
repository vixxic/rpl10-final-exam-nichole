import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-con outfit-font ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo" style={{ margin: scrolled ? "0" : "20px 0" }}>
        team<span>.</span>
      </h1>

      <div className="navbar-links-button">
        <ul className="nav-links">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Log in</a>
          </li>
        </ul>

        <button className="get-access-btn">Get Access</button>
      </div>
    </div>
  );
}

export default Navbar;
