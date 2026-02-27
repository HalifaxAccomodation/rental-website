import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.topSection}>
          <div style={styles.brandSection}>
            <h3 style={styles.logo}>Halifax Rentals</h3>
            <p style={styles.tagline}>
              Your trusted rental specialist in Halifax and surrounding areas.
            </p>
            <div style={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div style={styles.linksSection}>
            <div>
              <h4 style={styles.sectionTitle}>Quick Links</h4>
              <ul style={styles.linkList}>
                <li>
                  <a href="/listings" style={styles.link}>
                    All Rentals
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Pet Friendly
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Furnished
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Luxury
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={styles.sectionTitle}>Services</h4>
              <ul style={styles.linkList}>
                <li>
                  <a href="/#" style={styles.link}>
                    Tenant Screening
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Lease Agreements
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="/#" style={styles.link}>
                    Property Management
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.contactSection}>
            <h4 style={styles.sectionTitle}>Contact John</h4>
            <div style={styles.contactItem}>
              <FaPhoneAlt style={styles.contactIcon} />
              <span>(905) 555-0123</span>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.contactIcon} />
              <span>john@halifaxrentals.ca</span>
            </div>
            <div style={styles.contactItem}>
              <FaMapMarkerAlt style={styles.contactIcon} />
              <span>Halifax, NS 123 456</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.copyright}>
            © 2026 Halifax Rentals. All rights reserved. | Licensed Real Estate
            Agent
          </div>
          <div style={styles.legalLinks}>
            <a href="/privacy" style={styles.legalLink}>
              Privacy Policy
            </a>
            <span style={styles.separator}>|</span>
            <a href="/terms" style={styles.legalLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)",
    color: "white",
    marginTop: "5rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem 1.5rem",
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2.5rem",
    marginBottom: "2rem",
  },
  brandSection: {
    textAlign: "left",
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#667eea",
    marginBottom: "0.5rem",
    fontFamily: '"Georgia", serif',
  },
  tagline: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    opacity: 0.9,
  },
  socialLinks: {
    display: "flex",
    gap: "1rem",
  },
  socialIcon: {
    width: "48px",
    height: "48px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  linksSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#ecf0f1",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#bdc3c7",
    textDecoration: "none",
    display: "block",
    padding: "0.4rem 0",
    transition: "color 0.3s ease",
    fontSize: "0.95rem",
  },
  contactSection: {
    textAlign: "left",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1rem",
    color: "#bdc3c7",
  },
  contactIcon: {
    width: "20px",
    height: "20px",
    color: "#667eea",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  copyright: {
    color: "#95a5a6",
    fontSize: "0.9rem",
  },
  legalLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  legalLink: {
    color: "#95a5a6",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  separator: {
    color: "#95a5a6",
  },
};

export default Footer;
