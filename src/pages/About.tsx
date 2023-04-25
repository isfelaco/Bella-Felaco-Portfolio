import React, { useRef } from "react";
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
	align-items: center;
	padding: 20px;
	gap: 50px;
`;
const RightColumn = styled(AboutColumn)`
	flex: 60%;
	align-items: center;
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

const EmailForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	gap: 10px;

	h4 {
		margin: 0;
	}
	input:not(:nth-last-child(2)) {
		opacity: 0.25;
		border: 1px solid gray;
		border-radius: 5px;
		width: 100%;
	}
	input:nth-last-child(2) {
		color: #aa4586;
		font-weight: bold;
		background: transparent;
		width: 100px;
		border: 1px solid gray;
		border-radius: 5px;
	}
`;

const EmailInput = styled.input`
	height: 100px;
`;

const Button = styled.a`
	border: 1px solid white;
	border-radius: 5px;
	padding: 5px 10px 5px 10px;
	color: white;
	background: #aa4586;
`;

export function About() {
	const emailRef = useRef<HTMLAnchorElement>(null);
	const sendEmail = (event: any) => {
		event.preventDefault();
		const subj = event.target[0].value;
		const msg = event.target[1].value;
		if (emailRef.current) {
			emailRef.current.href =
				"mailto:ifelaco@opengov.com?subject=" + subj + "&body=" + msg;
			emailRef.current.click();
		}
	};

	return (
		<Section title="About">
			<Row gap={25}>
				<LeftColumn>
					<Image src={UVAlogo} alt="logo" />
					<EmailForm onSubmit={sendEmail} id="myForm">
						<h2>Send an Email</h2>
						<h4>Subject</h4>
						<input type="text" />
						<h4>Message</h4>
						<EmailInput type="text" />
						<input type="submit" />
						<a ref={emailRef} href=" " hidden>
							{" "}
						</a>
					</EmailForm>
				</LeftColumn>
				<RightColumn>
					<div>
						<h1>Contact</h1>
						<p>isf4rjk@virginia.edu</p>
						<p>(508) 507-1856</p>
						<Button
							href="http://linkedin.com/in/isabella-felaco"
							target="_blank"
							rel="noreferrer"
						>
							View LinkedIn
						</Button>
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
