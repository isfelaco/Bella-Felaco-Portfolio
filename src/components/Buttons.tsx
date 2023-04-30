import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../css/App.css";

const WhiteButton = styled.button<{ float: string | undefined }>`
	background-color: rgb(255, 255, 255, 0.5);
	border: none;
	border: 0.25px solid white;
	border-radius: 5px;
	height: 50px;
	width: 100px;
	cursor: pointer;
	float: ${({ float }) => float};

	&:hover {
		border: 0.5px solid white;
	}
`;

const CustomLink = styled(Link)`
	color: #aa4586;
	font-family: myFont;
	font-weight: bold;
	font-size: 20px;
	text-transform: uppercase;
`;

type ButtonProps = {
	to: string;
	text: string;
	float?: string;
};

export function Button({ to, text, float }: ButtonProps) {
	return (
		<WhiteButton float={float}>
			<CustomLink to={to}>{text}</CustomLink>
		</WhiteButton>
	);
}

const ButtonContainer = styled.div<{ align: string | undefined }>`
	display: flex;
	gap: 20px;
	justify-content: ${({ align }) => align};
`;

type ButtonRowProps = {
	children: ReactElement[];
	align?: string;
};

export function ButtonRow({ children, align }: ButtonRowProps) {
	return <ButtonContainer align={align}>{children}</ButtonContainer>;
}
