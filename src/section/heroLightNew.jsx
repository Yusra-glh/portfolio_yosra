import React from 'react';
import { Link } from "react-scroll";
import Typed from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >Welcome to My Website
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big mb-0">Hi, I'm <span className="color">Yosra Gallah</span></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["a Mobile Engineer", "a Great Team Player", "a Software Engineer."]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <p className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                        A versatile mobile developer skilled in Flutter and React Native, proficient in UI design, agile development, and Git collaboration, fostering team communication and delivering exceptional work. </p>
                        <button className="btn-main mt-3">
                            <Link className="nav-link transition" spy to="resume">
                                My Resume
                            </Link>
                        </button>
                    </div>

                    <div className="col-md-6">
                        <img src="./img/misc/22.png" className="img-fluid full-height-img" alt="imghero"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;
