import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../components/Section";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	justify-content: center;
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid white;
	border-radius: 5px;
	padding: 25px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	font-size: 25px;
`;

const Description = styled.p`
	display: block;
	text-indent: 50px;
	text-align: left;

	@keyframes slideIn {
		0% {
			max-height: 0;
		}
		100% {
			max-height: 100%;
		}
	}
	overflow: hidden;
	animation: slideIn 2s;
`;

export function Experience() {
	return (
		<Section title="Experience">
			<Column>
				<div>
					<Row>
						<i>
							Software Engineer Intern, <b>OpenGov</b>, remote
						</i>
						May 2022 - present
					</Row>

					<Description>
						Since May of last year, I've worked at the company OpenGov as a
						software engineer. With the mentorship of{" "}
						<a
							href="http://linkedin.com/in/jennifergoyer"
							target="_blank"
							rel="noreferrer"
						>
							Jennifer Goyer
						</a>
						, I learned to use React, Typescript, and CSS to develop custom UI
						components. I also gained familiarity with SQLPro and have become
						very experienced with Git, specifically with Github and more
						generally with Bitbucket. Last summer, I worked full-time, and
						continued throughout the school year working 10 hours per week. This
						summer I will continue my work full-time again.
					</Description>
				</div>
				<div>
					<Row>
						<i>
							Tutor, <b>UVA School of Engineering</b>, Charlottesville, VA
						</i>
						September 2021 - May 2022
					</Row>
					<Description>
						In fall of last year, I begin tutoring Chemistry for UVA's School of
						Engineering. It was a learning curve figuring out how to teach
						complex concepts in an understandable manner. The next semester when
						I taught four different computer science courses, I was much more
						adept and the content was more familiar to me. From tutoring in
						computer science, I have become very skilled at debugging and
						trouble-shooting code quickly.
					</Description>
				</div>
				<div>
					<Row>
						<i>
							Tutor, <b>UVA School of Education, America Reads</b>,
							Charlottesville, VA
						</i>
						September 2021 - May 2022
					</Row>
					<Description>
						Last school year I had the pleasure of working at Walker Upper
						Elementary School in Charlottesville, VA. There I assisted in 5th
						grade classroom with students of varied learning levels. The class
						consisted of many non-native English speakers that needed additional
						assistance; I would work one-on-one with these students so that the
						teacher could focus on the rest of the class. This position taught
						me a lot of leadership and how to adapt people's learning styles to
						best help them.
					</Description>
				</div>
			</Column>
		</Section>
	);
}
