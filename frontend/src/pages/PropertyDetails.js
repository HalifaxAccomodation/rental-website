import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheckCircle,
} from "react-icons/fa";
import axios from "axios";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rental-website-2l24.onrender.com/api/properties/${id}`)
      .then((res) => {
        setProperty(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div style={loadingStyle}>Loading property details...</div>;
  if (!property) return <div style={errorStyle}>Property not found</div>;

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <Link to="/listings" style={backLinkStyle}>
          ← All Listings
        </Link>
        <div style={heroContentStyle}>
          <div style={heroLeftStyle}>
            <h1 style={titleStyle}>{property.title}</h1>
            <div style={locationRowStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <span>
                {property.address}, {property.city}, {property.state}{" "}
                {property.zipCode}
              </span>
            </div>
            <div style={priceContainerStyle}>
              <span style={priceStyle}>${property.price}</span>
              <span style={perMonthStyle}>/month</span>
            </div>
          </div>
          <div style={statusContainerStyle}>
            <div style={statusBadgeStyle}>AVAILABLE NOW</div>
          </div>
        </div>
      </div>

      <div style={mainLayoutStyle}>
        {/* Left Column - Image + Specs */}
        <div style={leftColumnStyle}>
          <img
            src={
              property.imageUrl ||
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000"
            }
            alt={property.title}
            style={mainImageStyle}
          />

          <div style={specsContainerStyle}>
            <div style={specItemStyle}>
              <FaBed style={specIconStyle} />
              <div>
                <div style={specValueStyle}>{property.bedrooms}</div>
                <div style={specLabelStyle}>Bedrooms</div>
              </div>
            </div>
            <div style={specItemStyle}>
              <FaBath style={specIconStyle} />
              <div>
                <div style={specValueStyle}>{property.bathrooms}</div>
                <div style={specLabelStyle}>Bathrooms</div>
              </div>
            </div>
            <div style={specItemStyle}>
              <FaRulerCombined style={specIconStyle} />
              <div>
                <div style={specValueStyle}>~1,200 sqft</div>
                <div style={specLabelStyle}>Size</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={rightColumnStyle}>
          <div style={descriptionCardStyle}>
            <h2 style={sectionTitleStyle}>Property Overview</h2>
            <p style={descriptionStyle}>{property.description}</p>
            <div style={featuresGridStyle}>
              <div style={featureItemStyle}>
                Availability: <strong>Immediate</strong>
              </div>
              <div style={featureItemStyle}>
                Lease Term: <strong>12 months</strong>
              </div>
              <div style={featureItemStyle}>
                Pets: <strong>Case by case</strong>
              </div>
              <div style={featureItemStyle}>
                Utilities: <strong>Tenant responsible</strong>
              </div>
            </div>
          </div>

          {property.amenities && property.amenities.length > 0 && (
            <div style={amenitiesCardStyle}>
              <h3 style={cardTitleStyle}>Amenities</h3>
              <div style={amenitiesListStyle}>
                {property.amenities.map((amenity, index) => (
                  <div key={index} style={amenityStyle}>
                    <FaCheckCircle style={checkIconStyle} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={actionButtonsStyle}>
            <Link to="/contact" style={primaryButtonStyle}>
              📅 Schedule Viewing
            </Link>
            <button style={secondaryButtonStyle} onClick={() => window.print()}>
              🖨️ Print Flyer
            </button>
          </div>

          <div style={agentCardStyle}>
            <h3 style={agentTitleStyle}>Contact Your Agent</h3>
            <div style={agentInfoStyle}>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
                alt="John Smith"
                style={agentPhotoStyle}
              />
              <div>
                <div style={agentNameStyle}>John Smith</div>
                <div style={agentPhoneStyle}>(905) 555-0123</div>
                <a href="mailto:john@niagararentals.ca" style={agentEmailStyle}>
                  john@niagararentals.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ ALL STYLES DEFINED - NO ERRORS
const containerStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "1rem 1rem 3rem 1rem",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
};

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  fontSize: "1.3rem",
  color: "#666",
};

const errorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  color: "#dc3545",
  fontSize: "1.5rem",
};

const heroStyle = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  padding: "2.5rem 2rem",
  borderRadius: "24px",
  marginBottom: "2.5rem",
  boxShadow: "0 20px 60px rgba(102,126,234,0.3)",
};

const backLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "rgba(255,255,255,0.9)",
  textDecoration: "none",
  padding: "0.75rem 1.5rem",
  backgroundColor: "rgba(255,255,255,0.15)",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "all 0.3s ease",
  marginBottom: "2rem",
  backdropFilter: "blur(10px)",
};

const heroContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  flexWrap: "wrap",
  gap: "2rem",
};

const heroLeftStyle = {
  flex: 1,
  minWidth: 0,
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  lineHeight: "1.2",
  fontWeight: "700",
  color: "white",
};

const locationRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "1.5rem",
  fontSize: "1.15rem",
  opacity: 0.95,
};

const iconStyle = {
  width: "22px",
  height: "22px",
};

const priceContainerStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
  marginTop: "1rem",
};

const priceStyle = {
  fontSize: "3.5rem",
  fontWeight: "800",
  background: "rgba(255,255,255,0.2)",
  padding: "0.5rem 1.2rem",
  borderRadius: "16px",
  backdropFilter: "blur(12px)",
  lineHeight: 1,
};

const perMonthStyle = {
  fontSize: "1.3rem",
  opacity: 0.9,
};

const statusContainerStyle = {};

const statusBadgeStyle = {
  backgroundColor: "rgba(40,167,69,0.95)",
  color: "white",
  padding: "1.2rem 2.5rem",
  borderRadius: "50px",
  fontSize: "1.1rem",
  fontWeight: "700",
  boxShadow: "0 8px 25px rgba(40,167,69,0.3)",
  whiteSpace: "nowrap",
};

const mainLayoutStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 360px",
  gap: "2.5rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const leftColumnStyle = {};

const mainImageStyle = {
  width: "100%",
  height: "480px",
  objectFit: "cover",
  borderRadius: "24px",
  boxShadow: "0 25px 75px rgba(0,0,0,0.15)",
  marginBottom: "2rem",
};

const specsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "1.2rem",
};

const specItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
};

const specIconStyle = {
  width: "26px",
  height: "26px",
  color: "#667eea",
};

const specValueStyle = {
  fontSize: "1.6rem",
  fontWeight: "700",
  color: "#2c3e50",
};

const specLabelStyle = {
  fontSize: "0.9rem",
  color: "#666",
  marginTop: "0.2rem",
};

const rightColumnStyle = {};

const descriptionCardStyle = {
  backgroundColor: "white",
  padding: "2.5rem",
  borderRadius: "24px",
  boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
  marginBottom: "2rem",
};

const sectionTitleStyle = {
  color: "#2c3e50",
  marginBottom: "1.5rem",
  fontSize: "1.7rem",
  fontWeight: "600",
};

const descriptionStyle = {
  fontSize: "1.08rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "2rem",
};

const featuresGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.2rem",
  padding: "1.5rem 0",
};

const featureItemStyle = {
  color: "#666",
  fontSize: "1rem",
  padding: "0.8rem 0",
};

const amenitiesCardStyle = {
  backgroundColor: "white",
  padding: "2.5rem",
  borderRadius: "24px",
  boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
  marginBottom: "2rem",
};

const cardTitleStyle = {
  color: "#2c3e50",
  marginBottom: "1.5rem",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const amenitiesListStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
};

const amenityStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  color: "#555",
  padding: "0.5rem 0",
};

const checkIconStyle = {
  width: "20px",
  height: "20px",
  color: "#28a745",
};

const actionButtonsStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",
  marginBottom: "2rem",
};

const primaryButtonStyle = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  padding: "1.4rem 2rem",
  textDecoration: "none",
  borderRadius: "16px",
  fontSize: "1.15rem",
  fontWeight: "600",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(102,126,234,0.4)",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const secondaryButtonStyle = {
  backgroundColor: "white",
  color: "#2c3e50",
  border: "2px solid #e9ecef",
  padding: "1.4rem 2rem",
  borderRadius: "16px",
  fontSize: "1.15rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
};

const agentCardStyle = {
  backgroundColor: "white",
  padding: "2.5rem",
  borderRadius: "24px",
  boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
};

const agentTitleStyle = {
  color: "#2c3e50",
  marginBottom: "1.5rem",
  fontSize: "1.6rem",
  fontWeight: "600",
};

const agentInfoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
};

const agentPhotoStyle = {
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
};

const agentNameStyle = {
  fontSize: "1.3rem",
  fontWeight: "600",
  color: "#2c3e50",
  marginBottom: "0.3rem",
};

const agentPhoneStyle = {
  fontSize: "1.1rem",
  color: "#667eea",
  fontWeight: "500",
  marginBottom: "0.3rem",
};

const agentEmailStyle = {
  color: "#667eea",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
};

export default PropertyDetail;
