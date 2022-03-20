import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import Smatbot from "../../Assets/Projects/Smatbot.png";
import todo from "../../Assets/Projects/todo_.png";
import Booking from "../../Assets/Projects/Booking.png";
import GWW from "../../Assets/Projects/GWW.PNG";
import FFD from "../../Assets/Projects/FFDemo.PNG";
import Port from "../../Assets/Projects/portfolio.PNG";
import Colors from "../../Assets/Projects/Colors.PNG";
import BJ from "../../Assets/Projects/BJ.PNG";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={FFD}
							isBlog={false}
							title="Food Frenzy"
							description="A 2 week project for college built using Unity and C# to create a silly coherent game with a full lifecycle. Designed by Ryan Bombard, Coded my Me."
							techstack="Unity | C# | Photoshop"
							
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={GWW}
							isBlog={false}
							title="Graeter WoodWorking"
							description="Graeter Woodworking is a local business I designed there website for, a gallery website designed to showoff products and previous built items."
							techstack="HTML | CSS | JS | React | Redux | Material UI"
							
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Port}
							isBlog={false}
							title="Portfolio Website"
							description="Portfolio Website built to showoff Projects, Details about me, and my Resume. Utilizing Gridsystems and repsonsive design creating a clean overall website."
							techstack="HTML | CSS |  React | Material UI"
							
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Colors}
							isBlog={false}
							title="Color Picker App"
							description="One of my first projects in ReactJs. CSS based project that allows a user to get detailed information about shaddes of colors inlcuding hex,rgb and rgba."
							techstack="HTML | CSS |  React "
							
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BJ}
							isBlog={false}
							title="Blackjack Game"
							description="1v1 Player vs player Blackjack game. 2 players play against one another for the best hand no greater than 21. One of my first projects based off mostly javascript."
							techstack="HTML | CSS |  Javascript "
							
						/>
					</Col>

					
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;