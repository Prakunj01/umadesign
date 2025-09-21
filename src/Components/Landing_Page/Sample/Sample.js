import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Sample.css";

function Sample() {
  const [category, setCategory] = useState("all");

  // Dummy data (replace with your images)
  const workItems = [
    { src: "/images/work/Elevation/house1.jpg", category: "Elevation" },
    { src: "/images/work/Elevation/house2.jpg", category: "Elevation" },
    { src: "/images/work/Plans/plan1.jpg", category: "Plans" },
    { src: "/images/work/Plans/plan2.jpg", category: "Plans" },
    { src: "/images/work/Interior/interior1.jpg", category: "Interior" },
    { src: "/images/work/Interior/interior2.jpg", category: "Interior" },
    { src: "/images/work/Interior/interior3.jpg", category: "Interior" },
    { src: "/images/work/Commercial/office1.jpg", category: "Commercial" },
    { src: "/images/work/Commercial/office2.jpg", category: "Commercial" },
    { src: "/images/work/Commercial/office3.jpg", category: "Commercial" },
    { src: "/images/work/Residential/home1.jpg", category: "Residential" },
    { src: "/images/work/Residential/home2.jpg", category: "Residential" },

];

  const filteredItems =
    category === "all"
      ? workItems
      : workItems.filter((item) => item.category === category);

  return (
    <section className="ourWork" id="ourWork">
      <div className="section-header">
        <h1 className="section-heading">Our Work</h1>
        <div className="underline"></div>
      </div>

      <div className="work">
        {/* Filter Buttons */}
        <div className="btn-container">
          <button onClick={() => setCategory("all")} className={category === "all" ? "active" : ""}>
            All
          </button>
          <button onClick={() => setCategory("Elevation")} className={category === "Elevation" ? "active" : ""}>
            Elevation
          </button>
          <button onClick={() => setCategory("Plans")} className={category === "Plans" ? "active" : ""}>
            Plans
          </button>
          <button onClick={() => setCategory("Interior")} className={category === "Interior" ? "active" : ""}>
            Interior
          </button>
          
          <button onClick={() => setCategory("Commercial")} className={category === "Commercial" ? "active" : ""}>
            Commercial
          </button>
          <button onClick={() => setCategory("Residential")} className={category === "Residential" ? "active" : ""}>
            Residential
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="sample-swiper"
        >
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="work-slide">
                <img src={item.src} alt={item.category} />
                <p className="img-category">{item.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Sample;