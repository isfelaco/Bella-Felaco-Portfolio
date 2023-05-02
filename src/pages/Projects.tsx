import React, { useState } from "react";
import { Section } from "../components/Section";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Column, Row } from "../css/SharedStyles";

const VideoPlayer = styled(ReactPlayer)`
	height: 100px;
	width: auto;
`;
const ProjectsColumn = styled(Column)`
	justify-content: center;
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid white;
	border-radius: 5px;
	padding: 25px;
	align-items: center;
	gap: 20px;
	width: fit-content;

	h1 {
		margin: 0;
	}
	p {
		width: 100%;
	}
`;

export function Projects() {
	return (
		<Section title="Projects">
			<Row gap={20}>
				<ProjectsColumn>
					<h1>Date Picker Component</h1>
					<i>Made for OpenGov Inc. in 2022</i>
					<ReactPlayer url="DatePicker.mov" controls width="fit-content" />
					<p>
						This component allows a user to select either type in a date (with
						auto-formatting) or auto-populate the input by selecting a date from
						the calendar. The user can navigate the calendar by the arrows,
						either by selecting or by keyboard for increases accessibility, or
						by selecting the dropdowns.
					</p>
				</ProjectsColumn>
				<ProjectsColumn>
					<h1>Requesting Changes</h1>
					<i>Contributed to for OpenGov Inc. in 2022</i>
					<ReactPlayer url="RequestChanges.mov" controls width="fit-content" />
					<p>
						This workflow is the Requesting Changes function for records. I
						personally contributed much of the frontend code, including the
						custom wrapper component for each field, and the overall layout.
					</p>
				</ProjectsColumn>
			</Row>
			<Row gap={20}>
				<ProjectsColumn>
					<h1>Personal Website</h1>
					<i>Made in 2023</i>
					<p>
						I created this website for an art student in order to display her
						work as a personal portfolio. I utilized React TSX and EmailJS.
					</p>
					{/* include completed link here */}
				</ProjectsColumn>
				<ProjectsColumn>
					<h1>Study Buddy Web Application</h1>
					<i>Made for course project in 2022</i>
				</ProjectsColumn>
			</Row>
		</Section>
	);
}
