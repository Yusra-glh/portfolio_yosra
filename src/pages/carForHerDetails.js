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

const CarForHerDetails = () => {
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
                      src="./img/portfolio/car for her/car for her pickup.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/car for her/car for her chat.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/car for her/car for her profile.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/car for her/car for her trip.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/car for her/car for her wallet.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/car for her/carforher home.png"
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
                <li><strong>Client</strong> Car For Her Company</li>
                <li><strong>Project duration</strong>Nov 2021 - Jun 2022</li>
                <li><strong>Project URL</strong>: <a href="https://play.google.com/store/apps/details?id=com.camelsoft.carforher">https://play.google.com/store/apps/details?id=com.camelsoft.carforher</a></li>
              </ul>
            </div>
            <div class="portfolio-description" style={{ color: "black" }}>
              <h2>Mobile app for car rental</h2>
              <p>
                Mobile app for users to rent a car for a service , manage trips , contact drivers (chat) and pay for trips ( Stripe payment Gateway) . It also serves as a dashboard for drivers to manage requests , view history and track trips. </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CarForHerDetails;
