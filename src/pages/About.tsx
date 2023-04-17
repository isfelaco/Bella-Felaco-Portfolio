import React from "react";
import { Section } from "../components/Section";
import styled from "styled-components";
import "../css/App.css";
import UVAlogo from "../css/UVA-logo.png";
import { Column, Row } from "../css/SharedStyles";

const AboutColumn = styled(Column)`
	justify-content: center;
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid white;
	border-radius: 5px;
`;
const LeftColumn = styled(AboutColumn)`
	flex: 40%;
`;
const RightColumn = styled(AboutColumn)`
	flex: 60%;
`;
const Image = styled.img`
	width: 75%;
	height: auto;
	transition: 2s;
	align-self: center;

	&:hover {
		width: 90%;
		transition: 1s;
	}
`;

export function About() {
	return (
		<Section title="About">
			<Row gap={25}>
				<LeftColumn>
					<Image src={UVAlogo} alt="logo" />
				</LeftColumn>
				<RightColumn>
					<div>
						<h1>Contact</h1>
						<p>isf4rjk@virginia.edu</p>
						<p>(508) 507-1856</p>
						<a
							href="http://linkedin.com/in/isabella-felaco"
							target="_blank"
							rel="noreferrer"
						>
							View LinkedIn
						</a>
					</div>
					<div>
						<h1>Education</h1>
						<p>University of Virgina, Charlottesville, VA</p>
						<i>2020-2024</i>
						<p>Bachelor of Science in Computer Science</p>
					</div>
					<div></div>
				</RightColumn>
			</Row>
		</Section>
	);
}
