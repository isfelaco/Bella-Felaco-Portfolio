import React, { useRef } from "react";
import { Section } from "../components/Section";
import styled from "styled-components";
import "../css/App.css";
import UVAlogo from "../css/UVA-logo.png";
import { Column, Row } from "../css/SharedStyles";
import emailjs from "emailjs-com";
import { Button } from "../components/Buttons";

const AboutColumn = styled(Column)`
	justify-content: center;
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid white;
	border-radius: 5px;
	width: 100%;
	align-items: center;
	&:hover {
		border: 0.5px solid #aa4586;
		background: rgb(255, 255, 255, 0.5);
	}
`;
const LeftColumn = styled(AboutColumn)`
	flex: 40%;
	padding: 20px;
	gap: 25px;
`;
const RightColumn = styled(Column)`
	flex: 60%;
	align-items: center;
	gap: 20px;
`;
const ColumnRow = styled(AboutColumn)`
	height: 50%;
	display: flex;
	gap: 20px;
	p,
	h1 {
		margin: 0;
	}
`;
const Image = styled.img`
	width: 75%;
	height: auto;
	align-self: center;
`;

const EmailForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	gap: 10px;

	h2,
	h4 {
		margin: 0;
	}
	textarea,
	input:not(last-child) {
		border: 1px solid white;
		border-radius: 5px;
		width: 100%;
		background-color: rgb(255, 255, 255, 0.3);
		font-family: myFont;
	}
	input:last-child {
		color: #aa4586;
		font-weight: bold;
		background: transparent;
		width: 100px;
		border: 1px solid white;
		border-radius: 5px;
	}
	textarea {
		height: 50px;
		max-height: 100px;
		resize: vertical;
	}
`;

export function About() {
	emailjs.init("iu8xABUMxkhOBMJVM");

	function sendEmail(e: any) {
		e.preventDefault();
		e.target.value = (Math.random() * 100000) | 0;
		emailjs.sendForm("contact_service", "contact_form", e.target).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<Section title="About">
			<Row gap={25}>
				<LeftColumn>
					<Image src={UVAlogo} alt="logo" />
					<EmailForm id="contact-form" onSubmit={sendEmail}>
						<h2>Send Email</h2>
						<input type="hidden" name="contact_number" />
						<label>Name</label>
						<input type="text" name="from_name" />
						<label>Email</label>
						<input type="email" name="reply_to" />
						<label>Subject</label>
						<input type="text" name="subject"></input>
						<label>Message</label>
						<textarea name="message"></textarea>
						<input type="submit" value="Send" />
					</EmailForm>
				</LeftColumn>
				<RightColumn>
					<ColumnRow>
						<h1>Contact</h1>
						<p>isf4rjk@virginia.edu</p>
						<p>(508) 507-1856</p>
						<Button
							style="pink"
							to="http://linkedin.com/in/isabella-felaco"
							text="View Linkedin"
						/>
					</ColumnRow>
					<ColumnRow>
						<h1>Education</h1>
						<p>University of Virgina, Charlottesville, VA</p>
						<i>2020-2024</i>
						<p>Bachelor of Science in Computer Science</p>
					</ColumnRow>
				</RightColumn>
			</Row>
		</Section>
	);
}
