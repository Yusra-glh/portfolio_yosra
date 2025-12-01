import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>My Resume</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="row gh-5">

                <div className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Sep 2024 - Present</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Developer</span>
                                    <span className="d_company">YZY Digital - Sousse</span>
                                    <ul> <li>Developed and maintained full-stack applications using <strong>Next.js</strong>, <strong>NestJS</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, delivering scalable and high-performance solutions.</li> <li>Integrated complex external systems, including implementing a robust communication layer with <strong>Odoo</strong> and connecting the platform to <strong>Strapi CMS</strong> for dynamic content management.</li> <li>Collaborated in an agile environment, contributing to architectural decisions, optimizing development workflows, and ensuring high-quality code delivery within project timelines.</li> </ul>

                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Jan 2024 - Aug 2024</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Team Lead (Contract)</span>
                                    <span className="d_company">MLK Solutions - Sousse</span>
                                    <ul> <li>Led a team of developers in an <strong>Agile</strong> context, ensuring effective team progress and the meeting of set objectives.</li> <li>Established and monitored <strong>software development processes</strong> to ensure functionality, deadlines, and budget were met.</li> <li>Participated in researching new <strong>technologies</strong>, <strong>tools</strong>, and <strong>development practices</strong> to improve team efficiency and work progress in a timely manner.</li> </ul>

                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Jul 2023 - Jan 2024</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Mobile Developer</span>
                                    <span className="d_company">Nehos Groupe - Sousse</span>
                                    <ul> <li>Utilization of <strong>REST APIs</strong> to dynamically consume and display data using components.</li> <li>Design and implementation of a <strong>responsive user interface (UI)</strong>, ensuring a consistent experience across devices and screen sizes using <strong>React Native</strong> components.</li> <li>Implementation of <strong>state management</strong> and <strong>dependency injection</strong> techniques, including the use of <strong>Redux</strong>, to efficiently handle complex application states.</li> <li>Successful integration and testing of <strong>Payment Gateway</strong> solutions through a stable architecture and continuous testing (<strong>CI/CD</strong>).</li> <li>Opening and validation of <strong>pull requests (PR)</strong> for collaborative code review, ensuring code quality and consistency within the development team.</li> </ul>
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Feb 2022 - Mar 2023</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Developer</span>
                                    <span className="d_company">CamelSoft LLC - Sousse</span>
                                    <ul> <li>Integrated various <strong>Maps API</strong> services such as <strong>Google Maps</strong>, <strong>HERE Maps</strong>, and <strong>OpenStreetMap</strong>.</li> <li>Utilized <strong>Web Services</strong> / <strong>REST APIs</strong> to manipulate and display dynamic data.</li> <li>Designed and implemented <strong>responsive UI components</strong>, ensuring an interactive user experience across multiple devices and screen sizes.</li> <li>Implemented multiple <strong>state management</strong> techniques and applied <strong>SOLID principles</strong> to efficiently optimize complex mobile/web application states.</li> <li>Integrated <strong>payment gateway</strong> solutions enabling secure in-app transactions.</li> </ul>
                                    <div className="list_location">Reference: Mohamed Khabir – CEO CamelSoft LLC | Email: khabirmohamed12@gmail.com</div>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022 - 2025</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Software engineering</span>
                                    <span className="d_company">EPI Digital – Sousse , Tunisie</span>
                                    <ul>
                                        <li>IT project management</li>
                                        <li>Development methodologies</li>
                                        <li>Web and mobile development</li>
                                        <li>Component engineering, software architectures, and models</li>
                                        <li>Human-Computer Interaction</li>
                                        <li>User experience</li>
                                        <li>Business Intelligence</li>

                                    </ul>
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2018 - 2021</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Applied Bachelor's Degree in Web Technologies and Multimedia</span>
                                    <span className="d_company">Higher Institute of Computer Science and Communication Technologies – Hammam Sousse , Tunisie</span>
                                    <ul>
                                        <li>Develop in learners the ability to execute test plans to ensure the quality of computer programs and their features.</li>
                                        <li>Develop in learners the ability to transform and evolve enterprise architecture according to strategic needs and business objectives.</li>
                                        <li>Develop techniques for implementing and integrating recommended solutions.</li>
                                        <li>Develop techniques for the development and implementation of computer applications.</li>
                                        <li>Develop the skill of identifying user needs to build customized programs based on the platforms and development tools used.</li>
                                    </ul>

                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
            </div>
        </div>
    );
}

export default hero;