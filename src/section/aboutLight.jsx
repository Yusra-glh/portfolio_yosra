import React from 'react';
import Skillbar from '../layout/skillbar';

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
                    <img src="./img/misc/3.png" className="img-fluid" alt=""/>
                </div>
	            <div className="col-md-6">
	                <h2>About Me</h2>
					<p>Dynamic mobile developer with proficiency in Flutter and React Native frameworks. I have experience in UI design, agile development, and Git for version control and collaboration. I effectively communicate within the team, empowering individuals to excel and consistently deliver exceptional work. As a recognized leader and mentor, I uphold high standards of modern technologies to meet project requirements.</p>
       
	                <div className="d-skills-bar">
	                  <div className="d-bar">
	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Flutter</span>
	                        </div>
	                        <Skillbar bgColor={"#CB7C6F"} progress={90} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>React Native</span>
	                        </div>
	                        <Skillbar bgColor={"#CB7C6F"} progress={70} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Git</span>
	                        </div>
	                        <Skillbar bgColor={"#CB7C6F"} progress={82} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Firebase</span>
	                        </div>
	                        <Skillbar bgColor={"#CB7C6F"} progress={62} />
	                    </div>

	                    <div className="d-skill" data-value="90%" style={{width: "90%"}}>
	                        <div className="d-info">
	                          <span>Agile</span>
	                        </div>
	                        <Skillbar bgColor={"#CB7C6F"} progress={90} />
	                    </div>

	                    </div>
	                </div>
	            </div>  

			</div>
		</div>
		</div>
	);
}

export default hero;