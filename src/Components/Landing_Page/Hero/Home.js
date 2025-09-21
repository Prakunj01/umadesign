import React from "react";
import bgImage from "../../../Assets/Background.jpg";
import "./Home.css";

const Home = ({ isLoaded }) => {
  return (
    <header className="hero">
      <div className="img-wrapper">
        <img src={bgImage} alt="Background" />
      </div>
      {/* isLoaded true hote hi .animate class add hogi */}
      <div className={`banner ${isLoaded ? "animate" : ""}`}>
        <h1>UMA Design &amp; Construction</h1>
        <p>Shape your Future with Careful Planning</p>
        <button>Discover now</button>
      </div>
    </header>
  );
};

export default Home;