import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          RentalPro
        </Link>
        <div style={styles.links}>
          <Link to="/listings" style={styles.link}>
            Listings
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: { background: "#2c3e50", padding: "1rem 0", color: "white" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  links: { display: "flex", gap: "2rem" },
  link: { color: "white", textDecoration: "none", fontSize: "1rem" },
};

export default Navbar;
