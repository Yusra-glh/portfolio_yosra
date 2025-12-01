import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_laptop id-color-2"></i>
                            <div className="text">
                                <h3>Frontend Development</h3>
                                Building responsive, interactive, and high-performance user interfaces using <b>Next.js</b> and modern web technologies.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_cloud id-color-2"></i>
                            <div className="text">
                                <h3>Backend Development</h3>
                                Designing and implementing scalable, secure, and efficient server-side applications and APIs using <b>NestJS</b>.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_mobile id-color-2"></i>
                            <div className="text">
                                <h3>Mobile App Development</h3>
                                Creating cross-platform mobile applications for iOS and Android with native-like performance using <b>React Native</b>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;