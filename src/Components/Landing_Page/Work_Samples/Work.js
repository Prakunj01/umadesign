import React from "react";
import "./Work.css";

// React Icons Imports
import { FaDraftingCompass, FaHardHat, FaBalanceScale, FaFileAlt, 
  FaCheckCircle, FaTools, FaHome, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { GiSteelClaws } from "react-icons/gi";

function Work() {
  return (
    <section className="offer" id="services">
      {/* 🔥 Animated Background Layer */}
      <div className="offer-bg"></div>

      <div className="section-header">
        <h1 className="section-heading">Building Dreams - Creating Futures</h1>
        <div className="underline"></div>
      </div>

      <div className="offerCard">
        <h2>
          Discover a range of tailored solutions designed to meet your unique
          needs – we offer you the expertise, innovation, and dedication to help
          you achieve your goals.
        </h2>

        <div className="cards-wrapper">
          <div className="smallCard">
            <FaDraftingCompass className="icon" />
            <div className="name">Architectural Design</div>
          </div>

          <div className="smallCard">
            <MdOutlineChair className="icon" />
            <div className="name">Interior Design</div>
          </div>

          <div className="smallCard">
            <FaHardHat className="icon" />
            <div className="name">Construction</div>
          </div>

          <div className="smallCard">
            <FaBalanceScale className="icon" />
            <div className="name">Valuation</div>
          </div>

          <div className="smallCard">
            <FaFileAlt className="icon" />
            <div className="name">Document Work</div>
          </div>

          <div className="smallCard">
            <GiSteelClaws className="icon" />
            <div className="name">Structure Design</div>
          </div>

          <div className="smallCard">
            <FaCheckCircle className="icon" />
            <div className="name">Quality Control</div>
          </div>

          <div className="smallCard">
            <FaTools className="icon" />
            <div className="name">Renovation</div>
          </div>

          <div className="smallCard">
            <FaHome className="icon" />
            <div className="name">Property Dealing</div>
          </div>

          <div className="smallCard">
            <FaClipboardCheck className="icon" />
            <div className="name">Building Permission</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;