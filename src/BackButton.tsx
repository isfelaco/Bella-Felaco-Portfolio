import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/App.css";

const Button = styled.button`
	background-color: #a9ffcb;
	border: 1px solid white;
	border-radius: 5px;
	height: 50px;
	width: 100px;
	cursor: pointer;

	color: #aa4586;
	font-family: myFirstFont;
	font-weight: bold;
	font-size: 20px;
	text-transform: uppercase;

	&:hover {
		border: 2px solid #a4778b;
	}
`;

export function BackButton() {
	return (
		<Link to="/">
			<Button>Back</Button>
		</Link>
	);
}
