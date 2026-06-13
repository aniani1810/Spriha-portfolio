import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "900px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          className="section-title"
          style={{ borderBottom: "none", margin: 0 }}
        >
          Curriculum Vitae
        </h2>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button
          className="btn-outline"
          onClick={downloadCV}
          style={{ padding: "10px 25px", fontSize: "0.9rem" }}
        >
          Download CV
        </button>
        &nbsp; &nbsp;
        <button
          className="btn-outline"
          onClick={downloadResume}
          style={{ padding: "10px 25px", fontSize: "0.9rem" }}
        >
          Download Resume
        </button>
      </div>

      <motion.div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "40px",
          marginBottom: "40px",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{ color: "#a33852" }}>★</span> Core Skills
        </div>
        <div className="skills-grid">
          <div>
            <h4
              style={{
                color: "#a33852",
                marginBottom: "15px",
                fontFamily: "var(--font-body)",
              }}
            >
              Design Skills
            </h4>
            <ul className="skills-list">
              <li>Fashion Design & Illustration</li>
              <li>Draping Techniques</li>
              <li>Garment Construction & Pattern Making</li>
              <li>Surface Ornamentation</li>
              <li>Digital Designing</li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                color: "#a33852",
                marginBottom: "15px",
                fontFamily: "var(--font-body)",
              }}
            >
              Professional Skills
            </h4>
            <ul className="skills-list">
              <li>Fashion Forecasting & Trend Analysis</li>
              <li>Brand Development & Identity</li>
              <li>Garment Documentation & Tech Packs</li>
              <li>Fashion & Styling</li>
              <li>Collection Development</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "40px",
          marginBottom: "40px",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{ color: "#a33852" }}>💼</span> Experience
        </div>

        <div className="timeline-item">
          <div className="timeline-title"> Freelance Graphic Designer</div>
          <div className="timeline-meta">Django India | November 2024</div>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            Conceptualized and designed custom merchandise, including official
            t-shirts, aligning with the brand’s identity and team culture.
            Managed end-to-end design delivery, ensuring high-quality vector
            graphics ready for textile printing.
          </p>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            <strong>Technologies used:</strong> Adobe Illustrator, Adobe
            Photoshop, Corel Draw
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-title"> Graphic Design Intern</div>
          <div className="timeline-meta">
            Valdavi (Graspers E-Learning Solutions) | JUNE 2024 – AUGUST 2024
          </div>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            Developed visual assets and educational graphics to enhance user
            engagement across digital e-learning platforms.
          </p>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            <strong>Technologies used:</strong> Adobe Illustrator , Adobe
            Photoshop
          </p>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel"
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "40px",
          marginBottom: "40px",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{ color: "#a33852" }}>🎓</span> Education
        </div>

        <div
          className="timeline-item"
          style={{ borderLeft: "none", paddingLeft: 0 }}
        >
          <div className="timeline-title">
            Bachelor of Design (Fashion Design)
          </div>
          <div className="timeline-meta">
            {" "}
            School of Fashion Technology, Pune | 2023 - 2027
          </div>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            Comprehensive study of fashion design, garment construction, draping
            techniques, fashion forecasting, and brand development.
          </p>
        </div>
        <div
          className="timeline-item"
          style={{ borderLeft: "none", paddingLeft: 0 }}
        >
          <div className="timeline-title">Senior Secondary (CBSE)</div>
          <div className="timeline-meta">
            {" "}
            Jagran Public School, Lucknow, UP | 2021 - 2022
          </div>
        </div>
        <div
          className="timeline-item"
          style={{ borderLeft: "none", paddingLeft: 0 }}
        >
          <div className="timeline-title">Secondary (ICSE)</div>
          <div className="timeline-meta">
            {" "}
            Jyoti Niketan School, Azamgarh, UP | 2019 - 2020
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel"
        style={{ width: "100%", maxWidth: "900px", padding: "40px" }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{ color: "#a33852" }}>👥</span> Portfolio Highlights
        </div>

        <div className="highlight-grid">
          <div className="highlight-card">
            <h4 style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
              Design Collections
            </h4>
            <span
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              Gilded Dusk, Unraveled, Modern Heiress, Cosmic Cartographer,
              Varanasi Vanguard
            </span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
              Online Collections
            </h4>
            <span
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              Everyday Art, Swarn Shristi, Digital Decay
            </span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
              Draping Expertise
            </h4>
            <span
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              Cowl Neck, Bias Cut, One Shoulder
            </span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
              Brand & Research
            </h4>
            <span
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              Brand Development, Technical Documentation
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
