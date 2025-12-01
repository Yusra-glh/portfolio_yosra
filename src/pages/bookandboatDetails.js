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

const BookAndBoatDetails = () => {
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
                      src="./img/portfolio/book and boat/web1.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/web2.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/web3.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/web4.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/web5.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat home.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat discover.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/boat details.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat reservations.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat reservation details.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/boat reservation step 2.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat profile.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat calendar.png"
                      alt=""
                      className="swiper-slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="./img/portfolio/book and boat/book and boat chat.png"
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
                    <strong>Client</strong> Tuniboat
                  </li>
                  <li>
                    <strong>Project duration</strong> Apr 2022 - Jul 2022Apr
                  </li>
                  <li>
                    <strong>Mobile URL</strong>:{" "}
                    <a href="https://appadvice.com/app/bookandboat/1631227078">
                      https://appadvice.com/app/bookandboat/1631227078
                    </a>
                    
                    
                  </li>
                  <li>
                    <strong>Web URL</strong>:{" "}
                    <a href="https://tuniboat.com/">
                    https://tuniboat.com/
                    </a>
                    
                  </li>
                </ul>
              </div>
              <div class="portfolio-description" style={{ color: "black" }}>
                <h2>Web and Mobile app for boat rental</h2>
                <p>
                  This app serves as a platform for renting boats . The user in
                  this app can make a reservation, pay for a reservation, manage
                  his reservations and chat with the owner. It also helps the
                  boat owner to manage his reservation requests, manage his boat
                  (available/unavailable dates) and communicate with the
                  clients.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BookAndBoatDetails;
