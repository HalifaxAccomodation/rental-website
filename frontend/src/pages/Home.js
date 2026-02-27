import React from "react";
import { Link } from "react-router-dom";
import AgentBio from "../components/AgenBio";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1
          style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}
        >
          Discover Your Dream Rental in Halifax
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            lineHeight: "1.6",
          }}
        >
          Spacious apartments, modern condos, family homes.{" "}
          <strong>Pet-friendly options available.</strong>
          <br />
          Fast approvals • No hidden fees • Local expertise.
        </p>
        <Link to="/listings" style={styles.button}>
          Browse 25+ Available Rentals
        </Link>
      </div>

      <AgentBio />
    </div>
  );
};

const styles = {
  container: { textAlign: "center" },
  hero: {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
  },
  button: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.8rem 2rem",
    background: "white",
    color: "#667eea",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default Home;
