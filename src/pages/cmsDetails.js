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

const CmsDetails = () => {
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
                      src="./img/portfolio/cms/web1.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web2.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web3.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web4.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web5.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web6.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web7.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/cms/web8.jpeg"
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
                    <strong>Client</strong> YZY Digital (Solution interne)
                  </li>
                  <li>
                    <strong>Project duration</strong> Jul 2025 - Dec 2025
                  </li>
                
                   <li>
                    <strong>Web URL</strong>:{" "}
                    <a href="https://cms.yzy.dev/auth/signin">
                      https://cms.yzy.dev/
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
                <h2>CMS Web App</h2>
                <p>
                 A powerful, modular CMS web application designed to let users create complete websites with ease. The platform includes a flexible Collections module for adding and managing structured data, alongside an intuitive drag-and-drop page builder for creating custom layouts. Users can also generate dynamic pages that automatically display data from their collections using configurable queries. The system handles full user management, provides real-time website previews, and supports seamless publishing workflows, enabling anyone to build and launch professional, data-driven websites without technical complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CmsDetails;
