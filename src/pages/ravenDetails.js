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

const RavenDetails = () => {
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
                      src="./img/portfolio/raven/raven home.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven shipment request.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven shipment step 2.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                     src="./img/portfolio/raven/raven shipment step 3.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven upcoming shipments.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven user profile.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven driver home.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven driver history.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven driver map.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/raven/raven driver order details.png"
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
                    <strong>Client</strong> Raven Company
                  </li>
                  <li>
                    <strong>Project duration</strong> Jul 2022 - Sep 2022
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://play.google.com/store/apps/details?id=com.camelsoft.raven&hl=en_US">
                    https://play.google.com/store/apps/details?id=com.camelsoft.raven&hl=en_US
                    </a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
              <h2>Mobile app for parcel delivery</h2>
              <p>
                Mobile app for parcel delivery. Using this app, the user can easily choose a delivery company to deliver his parcels to any destination and manage his shipments. It also serves as a dashboard for drivers as they can manage their delivery requests easily. </p>
             </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default RavenDetails;
