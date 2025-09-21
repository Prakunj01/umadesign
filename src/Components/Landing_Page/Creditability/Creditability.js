import React from "react";
import { 
  FaProjectDiagram, FaUserTie, FaHandshake, FaLeaf, 
  FaUsers, FaRegClock, FaLightbulb, FaBuilding, FaDraftingCompass 
} from "react-icons/fa";
import "./Creditability.css";

function Creditability() {
  const items = [
    { icon: <FaProjectDiagram />, name: "Diverse Portfolio" },
    { icon: <FaUserTie />, name: "Certified Professionals" },
    { icon: <FaHandshake />, name: "Collaborative Approach" },
    { icon: <FaLeaf />, name: "Years of Experience" },
    { icon: <FaUsers />, name: "Client-Centric Focus" },
    { icon: <FaRegClock />, name: "On-Time and On-Budget" },
    { icon: <FaLightbulb />, name: "Innovative Solutions" },
    { icon: <FaLeaf />, name: "Sustainable Practices" }
  ];

  return (
    <section className="creditability" id="creditability">
      {/* 🔥 Animated Background Icons */}
      <div className="background-icons">
        <FaBuilding className="bg-icon icon1"/>
        <FaDraftingCompass className="bg-icon icon2"/>
        <FaProjectDiagram className="bg-icon icon3"/>
        <FaLightbulb className="bg-icon icon4"/>
        <FaUsers className="bg-icon icon5"/>
      </div>

      <div className="section-header">
        <h1 className="section-heading">Our Creditability</h1>
        <div className="underline"></div>
      </div>

      <div className="creditCards">
        {items.map((item, index) => (
          <div className="VerticalCard" key={index}>
            <div className="icon-circle">{item.icon}</div>
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Creditability;