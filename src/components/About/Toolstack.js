import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiWordpress,
	SiGithub,
	SiBootstrap,
	SiUnity
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCodepen />
				<p>Codepen</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWordpress />
				<p>Wordpress</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCodesandbox />
				<p>Code Sandbox</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiBootstrap />
				<p>Bootstrap</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiUnity />
				<p>Unity</p>
			</Col>
		</Row>
	);
}

export default Toolstack;