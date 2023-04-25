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
	width: 100%;
	&:hover {
		border: 0.5px solid #aa4586;
		background: rgb(255, 255, 255, 0.5);
	}
`;
const LeftColumn = styled(AboutColumn)`
	flex: 40%;
	align-items: center;
	padding: 20px;
	gap: 25px;
`;
const RightColumn = styled(Column)`
	flex: 60%;
	align-items: center;
	gap: 20px;
`;
const ColumnRow = styled(AboutColumn)`
	align-items: center;
	height: 50%;
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

	h4 {
		margin: 0;
	}
	textarea,
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

const EmailInput = styled.textarea`
	resize: none;
	height: 100px;
`;

const Button = styled.a`
	border: 1px solid white;
	border-radius: 5px;
	padding: 5px 10px 5px 10px;
	color: white;
	background: #a4778b;
	width: 200px;
`;

export function About() {
	const emailRef = useRef<HTMLAnchorElement>(null);
	const sendEmail = (event: any) => {
		event.preventDefault();
		const subj = event.target[0].value;
		const msg = event.target[1].value;
		if (emailRef.current) {
			emailRef.current.href =
				"mailto:isf4rjk@virginia.edu?subject=" + subj + "&body=" + msg;
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
						<EmailInput />
						<input type="submit" />
						<a ref={emailRef} href=" " hidden>
							{" "}
						</a>
					</EmailForm>
				</LeftColumn>
				<RightColumn>
					<ColumnRow>
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
