import React, { ReactNode } from "react";
import { Button, ButtonRow } from "./Buttons";
import "../css/App.css";
import styled from "styled-components";
import { Column } from "../css/SharedStyles";

type Props = {
	title: string;
	children?: ReactNode | ReactNode[];
};

const Subpage = styled(Column)`
	margin: 25px;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	animation: fadeIn 1s;
`;

export const Header = styled.div`
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid white;
	border-radius: 5px;

	height: fit-content;
	padding: 10px;
	display: grid;
	grid-auto-columns: minmax(0, 1fr);
	grid-auto-flow: column;
	align-items: center;
`;

const PageTitle = styled.p`
	color: #aa4586;
	font-size: 50px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin: 0;
	line-height: 100%;

	transition: 1s;

	&:hover {
		letter-spacing: 10px;
		transition: 0.5s;
	}
`;

export function Section(props: Props) {
	const { title, children } = props;
	return (
		<Subpage gap={25}>
			<Header>
				<Button to="/" text="Home" float="left" />
				<PageTitle>{title}</PageTitle>
				<ButtonRow align="right">
					<Button to="/" text="Back" />
					<Button to="/" text="Next" />
				</ButtonRow>
			</Header>
			{children}
		</Subpage>
	);
}
