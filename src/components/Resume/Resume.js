import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
function Resume() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src="https://drive.google.com/file/d/1xoMyCUB8hKaIh2vmBkXwRmjJydP1VZ5pwe2T6iIyYqs/preview"
						/>
					</Card>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;