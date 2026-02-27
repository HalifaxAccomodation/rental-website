import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/properties")
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Loading properties...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Available Rentals</h1>
        <p style={styles.subtitle}>
          {properties.length} properties available in Niagara Falls area
        </p>
      </div>
      <div style={styles.grid}>
        {properties.map((property) => {
          const isHovered = hoveredId === property._id;
          return (
            <Link
              to={`/property/${property._id}`}
              key={property._id}
              style={{
                ...styles.card,
                ...(isHovered ? styles.cardHover : {}),
                transform: isHovered ? "translateY(-8px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredId(property._id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={styles.imageContainer}>
                <img
                  src={
                    property.imageUrl ||
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                  }
                  alt={property.title}
                  style={styles.image}
                />
                {property.available && (
                  <div style={styles.availableBadge}>Available Now</div>
                )}
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.title}>{property.title}</h3>
                <p style={styles.location}>
                  {property.address}, {property.city}
                </p>
                <div style={styles.priceContainer}>
                  <span style={styles.price}>${property.price}</span>
                  <span style={styles.pricePerMonth}>/month</span>
                </div>
                <div style={styles.specs}>
                  <span>{property.bedrooms} BR</span>
                  <span>{property.bathrooms} BA</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "3rem 2rem", maxWidth: "1400px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "3rem" },
  h1: { fontSize: "3rem", color: "#2c3e50", marginBottom: "0.5rem" },
  subtitle: { fontSize: "1.3rem", color: "#666" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: "2.5rem",
    marginTop: "1rem",
  },
  card: {
    border: "none",
    borderRadius: "20px",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    background: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  cardHover: {
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  imageContainer: { position: "relative", height: "220px", overflow: "hidden" },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  availableBadge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "linear-gradient(135deg, #28a745, #20c997)",
    color: "white",
    padding: "0.4rem 1rem",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  cardContent: { padding: "1.8rem" },
  title: {
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
    color: "#2c3e50",
    fontWeight: "600",
  },
  location: { color: "#666", marginBottom: "1rem", fontSize: "1rem" },
  priceContainer: { marginBottom: "1rem" },
  price: {
    fontSize: "2.2rem",
    color: "#667eea",
    fontWeight: "700",
    marginRight: "0.3rem",
  },
  pricePerMonth: { fontSize: "1rem", color: "#999" },
  specs: {
    display: "flex",
    gap: "1.5rem",
    fontSize: "0.95rem",
    color: "#555",
    fontWeight: "500",
  },
  loading: {
    textAlign: "center",
    padding: "4rem",
    fontSize: "1.3rem",
    color: "#666",
  },
};

export default Listings;
