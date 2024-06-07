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

const BagzeeDetails = () => {
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
                      src="./img/portfolio/bagzee/bagzee1.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/bagzee/bagzee2.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/bagzee/bagzee3.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/bagzee/bagzee4.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/bagzee/bagzee5.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/bagzee/bagzee6.png"
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
                    <strong>Client</strong> Bagzee FR
                  </li>
                  <li>
                    <strong>Project duration</strong> Jui 2023 - Jan 2024
                  </li>
                  <li>
                    <strong>Play Store</strong>:{" "}
                    <a href="https://play.google.com/store/apps/details?id=com.bagzee.app">
                      https://play.google.com/store/apps/details?id=com.bagzee.app
                    </a>
                  </li>
                  <li>
                    <strong>App Store</strong>:{" "}
                    <a href="https://apps.apple.com/fr/app/bagzee/id6476136202">
                      https://apps.apple.com/fr/app/bagzee/id6476136202
                    </a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
                <h2>Mobile app for luggage delivery</h2>
                <p>
                  This platform offers a collaborative and eco-friendly luggage
                  delivery solution, allowing individuals and professionals to
                  transport baggage via train, car, bus, or boat, reducing the
                  load for travelers and airlines while providing opportunities
                  for earning or saving money
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BagzeeDetails;
