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

const GcsDetails = () => {
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
                      src="./img/portfolio/gcs/web.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/gcs/web1.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/gcs/web2.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/gcs/web4.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/gcs/web5.jpeg"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="/img/portfolio/gcs/web6.jpeg"
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
                    <strong>Client</strong> Global Concept Services
                  </li>
                  <li>
                    <strong>Project duration</strong> Sep 2024 - Jul 2025
                  </li>
                
                   <li>
                    <strong>Web URL</strong>:{" "}
                    <a href="https://www.gc-services.fr/fr">
                      https://www.gc-services.fr/fr
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
                <h2>E-commerce Web App</h2>
                <p>
                 A modern, scalable e-commerce web application for Global Concept Services, integrating key modules such as user management, dynamic cart and checkout, My Orders, and real-time delivery tracking to streamline telecom equipment procurement. The platform features seamless Odoo ERP communication, enabling automated syncing of orders, inventory, and customer data, as well as Strapi CMS integration for flexible content management. A secure MongoDB backup system ensures data reliability and business continuity. This solution enhances both pre-sales and post-sales workflows, providing Global Concept Services with a robust digital platform that supports their 20+ years of expertise in business communication services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default GcsDetails;
