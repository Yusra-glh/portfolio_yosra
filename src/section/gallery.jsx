import React from "react";
import Masonry from "react-masonry-component";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery = function () {
  /* lightbox1 */
  const navigate = useNavigate();
  const [lighbx, setlighbx] = React.useState(false);
  const handleBtnClick = () => {
    setlighbx(!lighbx);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleNavigate =(route)=>{
    console.log('====================================');
    console.log(route);
    console.log('====================================');
    navigate(route);
  }
  const handleBtnClickclose = () => {
    setlighbx(!lighbx);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  /* lightbox2 */
  const [lighbx1, setlighbx1] = React.useState(false);
  const handleBtnClick1 = () => {
    setlighbx1(!lighbx1);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleBtnClickclose1 = () => {
    setlighbx1(!lighbx1);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  /* lightbox2 */
  const [lighbx2, setlighbx2] = React.useState(false);
  const handleBtnClick2 = () => {
    setlighbx2(!lighbx2);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleBtnClickclose2 = () => {
    setlighbx2(!lighbx2);
    var x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };
  return (
    <div className="container">
      <GlobalStyles />
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Portfolio</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <Masonry className={"row my-gallery-class"} elementType={"div"}>
       
        <div
          className="col-lg-4 image-element-class de_modal de_modal"
          onClick={handleNavigate("/photolink")}
          data-aos="fade-up"
          data-aos-once="true"
        >
           <Link to="/photolink">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Photolink</h3>
              <h5 className="d-tag">Social media for photographers</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/photolink/logo.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
      
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick1}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/carforher">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Car For Her</h3>
              <h5 className="d-tag">Car rental App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/car for her/logo.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          
          <Link to="/bookandboat">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Book and Boat</h3>
              <h5 className="d-tag">Boat Rental App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/book and boat/logo.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/raven">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Raven</h3>
              <h5 className="d-tag">Parcel delivery App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/raven/icon.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick1}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/beemtaxi">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Beem Smart Taxi</h3>
              <h5 className="d-tag">Transportation app</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/beem smart taxi/icon.jpg"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
        //  onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="card-image-1">
            <div className="d-text">
              <h3>Aspar</h3>
              <h5 className="d-tag">Food delivery App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/aspar/logo.png"
              alt="gallery"
            />
          </div>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/rest4u">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Rest for you</h3>
              <h5 className="d-tag">HR management App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/rest4u/logo.svg"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        <div
          className="col-lg-4 image-element-class de_modal"
          //onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/beemdriver">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Beeem smart driver</h3>
              <h5 className="d-tag">App for taxi drivers</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/beem smart driver/icon.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/irama">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Irama</h3>
              <h5 className="d-tag">Stock management App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/irama/logo.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
        
        <div
          className="col-lg-4 image-element-class de_modal"
         // onClick={handleBtnClick2}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Link to="/bagzee">
          <div className="card-image-1">
            <div className="d-text">
              <h3>Bagzee</h3>
              <h5 className="d-tag">Packages delivery App</h5>
            </div>
            <img
              style={{ height: 220, objectFit: "contain" }}
              src="./img/portfolio/bagzee/bagzee.png"
              alt="gallery"
            />
          </div>
          </Link>
        </div>
      </Masonry>

      {/* lightbox1 */}
      {lighbx && (
        <div className="LightboxGal">
          <div className="closeGal">
            <button
              className="button-close"
             // onClick={handleBtnClickclose}
            ></button>
          </div>
          <div className="v-center w-100">
            <div className="mainLightbox container">
              <div className="row g-5">
                <div className="col-lg-8">
                  <img
                    src="./img/gallery-big/1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div className="col-lg-4 de_project-info">
                  <h3>Interior Design Website</h3>
                  <p>
                    Duis ad adipisicing id id in duis nisi qui veniam esse
                    voluptate cillum pariatur cupidatat ut dolore amet aliquip
                    cillum ad minim cillum nulla consectetur dolor culpa
                    deserunt mollit dolor ea pariatur laboris sed tempor laboris
                    quis commodo. Ut duis cupidatat consectetur cillum veniam eu
                    quis minim irure fugiat ut consequat do veniam duis dolor
                    quis cupidatat deserunt ut qui minim id dolor nisi sed non
                    ut proident enim culpa dolor elit dolor aliquip dolore enim
                    excepteur.
                  </p>

                  <div className="de_project-details">
                    <div className="d-field">
                      <i className="fa fa-user-o"></i>Client:{" "}
                      <span>Envato</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-file-text-o"></i>Type:{" "}
                      <span>Branding</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-calendar-o"></i>Year:{" "}
                      <span>2020</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-external-link"></i>Preview:{" "}
                      <span>
                        <a
                          href="https://www.envato.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.envato.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="spacer-30"></div>
                  <blockquote>
                    "Very well done theme. Versatile, extremely well coded, and
                    gorgeous. That's a great combo. Highly recommended."
                    <span>John Archi</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* lightbox2 */}
      {lighbx1 && (
        <div className="LightboxGal">
          <div className="closeGal">
            <button
              className="button-close"
             // onClick={handleBtnClickclose1}
            ></button>
          </div>
          <div className="v-center w-100">
            <div className="mainLightbox container">
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="row g-4">
                    <div className="col-lg-12 item">
                      <img
                        src="./img/single-gallery/pf-2-1.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 item">
                      <img
                        src="./img/single-gallery/pf-2-2.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 item">
                      <img
                        src="./img/single-gallery/pf-2-3.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-12 item">
                      <img
                        src="./img/single-gallery/pf-2-4.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 item">
                      <img
                        src="./img/single-gallery/pf-2-5.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 item">
                      <img
                        src="./img/single-gallery/pf-2-6.jpg"
                        alt="galleryimage"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 de_project-info">
                  <h3>Interior Design Website</h3>
                  <p>
                    Duis ad adipisicing id id in duis nisi qui veniam esse
                    voluptate cillum pariatur cupidatat ut dolore amet aliquip
                    cillum ad minim cillum nulla consectetur dolor culpa
                    deserunt mollit dolor ea pariatur laboris sed tempor laboris
                    quis commodo. Ut duis cupidatat consectetur cillum veniam eu
                    quis minim irure fugiat ut consequat do veniam duis dolor
                    quis cupidatat deserunt ut qui minim id dolor nisi sed non
                    ut proident enim culpa dolor elit dolor aliquip dolore enim
                    excepteur.
                  </p>

                  <div className="de_project-details">
                    <div className="d-field">
                      <i className="fa fa-user-o"></i>Client:{" "}
                      <span>Envato</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-file-text-o"></i>Type:{" "}
                      <span>Branding</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-calendar-o"></i>Year:{" "}
                      <span>2020</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-external-link"></i>Preview:{" "}
                      <span>
                        <a
                          href="https://www.envato.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.envato.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="spacer-30"></div>
                  <blockquote>
                    "Very well done theme. Versatile, extremely well coded, and
                    gorgeous. That's a great combo. Highly recommended."
                    <span>John Archi</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* lightboxvideo */}
      {lighbx2 && (
        <div className="LightboxGal">
          <div className="closeGal">
            <button
              className="button-close"
             // onClick={handleBtnClickclose2}
            ></button>
          </div>
          <div className="v-center w-100">
            <div className="mainLightbox container">
              <div className="row g-5">
                <div className="col-lg-8">
                  <video className="pop" controls autoPlay loop>
                    <source src="./video/local-video-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="col-lg-4 de_project-info">
                  <h3>Self Hosted Video</h3>
                  <p>
                    Duis ad adipisicing id id in duis nisi qui veniam esse
                    voluptate cillum pariatur cupidatat ut dolore amet aliquip
                    cillum ad minim cillum nulla consectetur dolor culpa
                    deserunt mollit dolor ea pariatur laboris sed tempor laboris
                    quis commodo. Ut duis cupidatat consectetur cillum veniam eu
                    quis minim irure fugiat ut consequat do veniam duis dolor
                    quis cupidatat deserunt ut qui minim id dolor nisi sed non
                    ut proident enim culpa dolor elit dolor aliquip dolore enim
                    excepteur.
                  </p>

                  <div className="de_project-details">
                    <div className="d-field">
                      <i className="fa fa-user-o"></i>Client:{" "}
                      <span>Envato</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-file-text-o"></i>Type:{" "}
                      <span>Branding</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-calendar-o"></i>Year:{" "}
                      <span>2020</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-external-link"></i>Preview:{" "}
                      <span>
                        <a
                          href="https://www.envato.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.envato.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="spacer-30"></div>
                  <blockquote>
                    "Very well done theme. Versatile, extremely well coded, and
                    gorgeous. That's a great combo. Highly recommended."
                    <span>John Archi</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
