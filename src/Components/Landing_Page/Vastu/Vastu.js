import React from "react";
import vastuImage from "../../../Assets/Vastu_.png";
import "./Vastu.css";

function Vastu() {
  return (
    <section className="vastu-section" id="vastu">
      {/* Bubble Background */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Section Heading */}
      <header className="section-header">
        <h2 className="section-heading">We Prioritize Your View</h2>
        <div className="underline"></div>
      </header>

      {/* Content */}
      <div className="vastu-content">
        {/* Image Left */}
        <figure className="vastu-image">
          <img src={vastuImage} alt="Vastu Design" />
        </figure>

        {/* Text Right */}
        <div className="vastu-text">
          <h4>Environmentally friendly & energy-efficient</h4>
          <p>
            Our client-centric approach means we work closely with you to
            understand your needs and bring your vision to life. By blending
            Vastu principles with modern architecture, we create spaces that
            radiate positivity, balance, and sustainability.
          </p>

          <h4>Balanced Living Spaces</h4>
          <p>
            Every layout is thoughtfully planned to ensure natural light,
            ventilation, and optimized use of space. This harmony not only
            enhances your daily comfort but also improves overall well‑being.
          </p>

          <h4>Sustainable & Future Ready</h4>
          <p>
            Our designs incorporate eco‑friendly materials, renewable energy
            solutions, and efficient space planning. We build homes that are not
            just modern but also future‑proof and environmentally responsible.
          </p>

          <h4>Positive Energy Flow</h4>
          <p>
            By following traditional Vastu principles, each home is designed to
            attract positive energy, support healthy relationships, and foster a
            peaceful lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vastu;