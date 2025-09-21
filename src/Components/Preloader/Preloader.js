import React, { useEffect, useState } from "react";
import "./Preloader.css";
import logo from "../../Assets/UDAC_Logo.png";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader chalao 2.5s ke liye (apni requirement ke hisaab se time change karo)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? "active" : "fade-out"}`}>
      <img src={logo} alt="logo" className="preloader-logo" />
    </div>
  );
}

export default Preloader;