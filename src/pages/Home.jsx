import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="hero-container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Spriha Singh
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fashion Designer
        </motion.p>

        {/* Dynamic Image Grid for visual impact */}
        <motion.div
          className="image-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            whileHover={{ scale: 1.2, rotate: -2 }}
            src="/photo 1.jpeg"
            alt="Design Illustration"
            className="grid-image"
          />
          <motion.img
            whileHover={{ scale: 1.3, rotate: 2 }}
            src="/photo 2.jpeg"
            alt="Spriha Portrait"
            className="grid-image"
            style={{ marginTop: "40px" }} // staggered effect
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: -2 }}
            src="/photo 3.jpeg"
            alt="Design Illustration"
            className="grid-image"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          style={{
            marginTop: "100px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-secondary)",
          }}
          onClick={() => {
            const aboutSection = document.querySelector(".about-section");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.6 }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="section-title"
          style={{ borderBottom: "none", textAlign: "center" }}
        >
          About Me
        </h2>
        <div className="about-content glass-panel" style={{ padding: "50px" }}>
          <div className="about-text">
            <p style={{ marginBottom: "20px" }}>
              Hi, I'm Spriha Singh, a Fashion Design student passionate about
              creating meaningful and innovative fashion experiences. I enjoy
              exploring the entire design process, from research and concept
              development to garment construction and visual presentation.
            </p>
            <p>
              With a strong foundation in design thinking, trend research,
              pattern making, garment construction, and digital design tools, I
              strive to create work that balances creativity, functionality, and
              market relevance. My approach focuses on understanding consumer
              needs while developing designs that are both aesthetically
              appealing and practical.
            </p>
            <p>
              I am constantly seeking opportunities to learn, experiment, and
              expand my skills across different areas of the fashion industry,
              including design, branding, merchandising, and product
              development. I believe in adaptability, attention to detail, and
              continuous growth, and I aim to contribute fresh ideas and a
              strong work ethic to every project I undertake.
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.02, rotate: 1 }}
            src="/spriha_portrait.jpg"
            alt="Spriha Portrait"
            className="about-image"
          />
        </div>
      </motion.div>

      {/* Philosophy, Stats, and Call To Actions */}
      <motion.div
        className="philosophy-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="glass-panel"
          style={{ width: "100%", maxWidth: "900px", padding: "50px" }}
        >
          <h3
            style={{
              color: "var(--accent-color)",
              marginBottom: "20px",
              fontSize: "1.8rem",
              fontFamily: "var(--font-heading)",
            }}
          >
            My Design Philosophy
          </h3>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            "Fashion is not just about clothing—it's about crafting experiences,
            emotions, and identities. Every stitch, every drape, every color
            choice is an opportunity to create something extraordinary that
            resonates with the wearer's soul."
          </p>
        </div>

        <div
          className="stats-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <div
            className="glass-panel stat-card"
            style={{ flex: "1", minWidth: "250px", padding: "40px 20px" }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>15+</h2>
            <p
              style={{
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              Design Projects
            </p>
          </div>
          <div
            className="glass-panel stat-card"
            style={{
              flex: "1",
              minWidth: "250px",
              padding: "40px 20px",
              border: "1px solid var(--glass-border)",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>9</h2>
            <p
              style={{
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              Categories
            </p>
          </div>
          <div
            className="glass-panel stat-card"
            style={{ flex: "1", minWidth: "250px", padding: "40px 20px" }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>∞</h2>
            <p
              style={{
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              Creative Vision
            </p>
          </div>
        </div>

        <div
          className="cta-buttons"
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            className="btn-primary"
            onClick={() => navigate("/portfolio")}
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--accent-color)",
            }}
          >
            View Portfolio &rarr;
          </button>
          <button className="btn-outline" onClick={() => navigate("/resume")}>
            View Resume
          </button>
          <button className="btn-outline" onClick={() => navigate("/connect")}>
            Get in Touch
          </button>
        </div>
      </motion.div>
    </div>
  );
}
