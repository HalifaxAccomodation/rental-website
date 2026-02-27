import React, { useState } from "react";
import axios from "axios";
import AgentBio from "../components/AgenBio";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5001/api/contact", formData);
      setStatus("✅ Thank you! John will contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 5000); // Auto clear success
    } catch (error) {
      setStatus(
        "❌ Sorry, message failed. Please call (905) 555-0123 or try again."
      );
      setTimeout(() => setStatus(""), 5000); // Auto clear error
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.layout}>
        <div style={styles.formSection}>
          <h1 style={styles.h1}>Ready to Schedule a Viewing?</h1>
          <p style={styles.intro}>
            Complete this form and receive a response within{" "}
            <strong>24 hours</strong>. Reference any property you're interested
            in for priority scheduling.
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                style={styles.input}
                placeholder="John Smith"
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                style={styles.input}
                placeholder="john@example.com"
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                style={styles.input}
                placeholder="(905) 555-0123"
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>
                Message *<br />
                <small>Property address or listing ID?</small>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows="6"
                style={styles.textarea}
                placeholder="I'm interested in the 2BR Fallsview condo at 610 Clifton Hill..."
              />
            </div>
            {/* Enhanced Action Buttons + Status */}
            <div style={styles.actionSection}>
              <button
                type="submit"
                disabled={status === "Sending..."}
                style={{
                  ...styles.primaryButton,
                  ...(status === "Sending..." ? styles.buttonDisabled : {}),
                }}
              >
                {status === "Sending..." ? (
                  <>
                    <span style={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  "📧 Send Inquiry"
                )}
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = "tel:+19055550123")}
                style={styles.phoneButton}
              >
                📞 Call John Now (905) 555-0123
              </button>
            </div>

            {status && (
              <div
                style={
                  status.includes("successfully")
                    ? styles.successMessage
                    : styles.errorMessage
                }
              >
                {status}
              </div>
            )}
          </form>
        </div>
        <div style={styles.bioSection}>
          <AgentBio />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "3rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "#f8f9fa",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "start",
  },
  formSection: { flex: 1 },
  bioSection: { flex: 1 },
  h1: {
    color: "#2c3e50",
    marginBottom: "1rem",
    fontSize: "2.5rem",
    lineHeight: "1.2",
  },
  intro: {
    color: "#666",
    marginBottom: "2.5rem",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  form: {
    background: "white",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  },
  field: { marginBottom: "1.8rem" },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "1rem 1.2rem",
    border: "2px solid #e1e5e9",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
    ":focus": { outline: "none", borderColor: "#667eea" },
  },
  textarea: {
    width: "100%",
    padding: "1rem 1.2rem",
    border: "2px solid #e1e5e9",
    borderRadius: "8px",
    fontSize: "1rem",
    resize: "vertical",
    fontFamily: "inherit",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%",
    padding: "1.2rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "transform 0.2s",
  },
  success: {
    marginTop: "1.5rem",
    color: "#28a745",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  error: { marginTop: "1.5rem", color: "#dc3545", fontSize: "1.1rem" },
  // ADD THESE NEW STYLES to your existing styles object
  actionSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.2rem",
    marginTop: "1.5rem",
  },
  primaryButton: {
    padding: "1.3rem 2rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "1.15rem",
    fontWeight: "600",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    boxShadow: "0 8px 25px rgba(102,126,234,0.3)",
  },
  buttonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
    background: "#95a5a6",
  },
  phoneButton: {
    padding: "1.3rem 2rem",
    background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
    color: "white",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "1.15rem",
    fontWeight: "600",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    boxShadow: "0 8px 25px rgba(40,167,69,0.3)",
    textDecoration: "none",
  },
  spinner: {
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255,255,255,0.3)",
    borderTop: "2px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    display: "inline-block",
    marginRight: "0.8rem",
  },
  successMessage: {
    marginTop: "2rem",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
    color: "#155724",
    borderRadius: "12px",
    border: "1px solid #c3e6cb",
    fontSize: "1.1rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    boxShadow: "0 5px 20px rgba(40,167,69,0.2)",
  },
  errorMessage: {
    marginTop: "2rem",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",
    color: "#721c24",
    borderRadius: "12px",
    border: "1px solid #f5c6cb",
    fontSize: "1.1rem",
    fontWeight: "500",
    boxShadow: "0 5px 20px rgba(220,53,69,0.2)",
  },
};

export default Contact;
