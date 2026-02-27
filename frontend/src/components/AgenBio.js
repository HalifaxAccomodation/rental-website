import React from "react";

const AgentBio = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
        alt="John Smith - Real Estate Agent"
        style={styles.photo}
      />
      <h2>John Smith</h2>
      <p style={styles.title}>REALTOR® | Rental Specialist | Halifax</p>
      <p style={styles.bio}>
        Serving Halifax and surrounding areas with 12+ years of rental
        expertise.
        <strong>98% client satisfaction</strong> and{" "}
        <strong>150+ rentals placed annually</strong>. From cozy apartments to
        luxury homes, I match tenants with their perfect rental.
      </p>
      <p style={styles.contact}>
        <strong>📱</strong> (905) 555-0123
        <br />
        <strong>✉️</strong> john@halifaxrentals.ca
        <br />
        <strong>🏠</strong> Licensed in Nova Scotia
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    background: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1.5rem",
    border: "4px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#667eea",
    fontSize: "1.1rem",
    fontStyle: "italic",
    marginBottom: "1rem",
  },
  bio: {
    lineHeight: "1.7",
    margin: "1.5rem 0 2rem 0",
    color: "#555",
  },
  contact: {
    marginTop: "1.5rem",
    textAlign: "left",
    display: "inline-block",
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
};

export default AgentBio;
