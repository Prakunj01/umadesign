import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./Components/Landing_Page/Hero/Home";
import About from "./Components/About/About";
import Work from "./Components/Landing_Page/Work_Samples/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Preloader from "./Components/Preloader/Preloader";
import Vastu from "./Components/Landing_Page/Vastu/Vastu";
import Sample from "./Components/Landing_Page/Sample/Sample";
import Creditability from "./Components/Landing_Page/Creditability/Creditability";
import Testimonial from "./Components/Landing_Page/Testimonials/Testimonials";
import WhatsappButton from "./Components/Floaticon/whatsapp";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.5 sec preloader, apne requirement ke hisaab se time adjust kar sakte ho
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Preloader tabhi show hoga jab loading true hai */}
      {loading && <Preloader />}

      <Navbar />
      {/* isLoaded ko Home me pass kiya jaa raha hai */}
      <Home isLoaded={!loading} />
      <About />
      <WhatsappButton />
      <Work />
      <Vastu />  
      <Sample />
      <Creditability />
      <Testimonial />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;