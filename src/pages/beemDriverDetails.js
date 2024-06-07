import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./photolink.css";

SwiperCore.use([Pagination, Navigation]);

const BeemDriverDetails = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <main
      id="main"
      style={{ backgroundColor: "white", minHeight: "100vh", color: "white" }}
    >
      <section
        id="portfolio-details"
        className="portfolio-details"
        style={{ backgroundColor: "white", color: "white" }}
      >
        <div className="container">
          <button
            onClick={handleBackClick}
            className="btn btn-primary mb-4"
            style={{
              backgroundColor: "#cf1f1f",
              border: { "border-color": "#cf1f1f" },
              borderColor: "#cf1f1f",
              borderRadius: 30,
            }}
          >
            X
          </button>
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <Swiper
                  pagination={{ clickable: true }}
                  navigation
                  className="swiper-wrapper align-items-center"
                  style={{ paddingBottom: "50px" }}
                >
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/beem smart driver/beem1.jpg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/beem smart driver/ezgif.com-webp-to-jpg.jpg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/beem smart driver/ezgif.com-webp-to-jpg (1).jpg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/beem smart driver/ezgif.com-webp-to-jpg (2).jpg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                 
                </Swiper>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" style={{ color: "black" }}>
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Client</strong> Beem IT
                  </li>
                  <li>
                    <strong>Project duration</strong> Dec 2022 - Mar 2023
                  </li>
                  <li>
                    <strong>Play Store</strong>:{" "}
                    <a href="https://play.google.com/store/apps/details?id=com.beem.it.driver">
                    https://play.google.com/store/apps/details?id=com.beem.it.driver
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
              <h2>Mobile app for taxi drivers</h2>
              <p>
                This app serves as a transportation platform that offers chauffeur-driven car reservation services, similar to other ride-hailing applications such as Uber. Bolt allows users to book car rides through the mobile application.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BeemDriverDetails;
