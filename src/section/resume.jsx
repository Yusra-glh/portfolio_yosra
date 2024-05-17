import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return(
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
                                <h3 className="d_timeline-title">Jan 2024 - now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Mobile Team Lead</span>
                                	<span className="d_company">MLK Solutions - Sousse</span>
                                	<ul>
  <li>Led a team of developers in agile context, ensuring effective team progress and the meeting of set objectives.</li>
  <li>Establish and monitor software development processes to ensure functionality, deadlines, and budget are met.</li>
  <li>Participate in researching new technologies, tools, and development practices to improve team efficiency and work progress in a timely manner.</li>
</ul>

                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Jul 2023 - Jan 2024</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Mobile Developer</span>
                                	<span className="d_company">Nehos Groupe - Sousse</span>
                                    <ul>
  <li>Utilization of REST APIs to dynamically consume and display data using components.</li>
  <li>Design and implementation of a responsive user interface (UI), ensuring a consistent experience on various devices and screen sizes through the use of components using React Native.</li>
  <li>Implementation of state management and dependency injection techniques, including the use of Redux, to efficiently handle complex application states.</li>
  <li>Successful integration and testing of Payment Gateway solutions, through a stable architecture and continuous testing (CI/CD).</li>
  <li>Opening and validation of pull requests (PR) for collaborative code review, guaranteeing code quality and consistency within the development team.</li>
</ul>
 </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Feb 2022 - Mar 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Mobile Developer</span>
                                	<span className="d_company">CamelSoft LLC - Sousse</span>
                                    <ul>
    <li>Integrated various maps API services such as Google Maps, HERE Maps, and Open Street Maps.</li>
    <li>Utilized Web Services / REST APIs to manipulate and display dynamic data.</li>
    <li>Designed and implemented responsive UI components, ensuring an interactive user experience across multiple devices and screen sizes.</li>
    <li>Implemented multiple state management and SOLID principles to efficiently optimize the complex different states of mobile applications.</li>
    <li>Integrated payment gateway solutions that enable secure in-app transactions.</li>
  </ul>
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