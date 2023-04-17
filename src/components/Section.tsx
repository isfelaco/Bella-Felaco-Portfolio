import React, { ReactNode } from "react";
import { BackButton } from "./BackButton";
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

export const PageTitle = styled.p`
	color: #aa4586;
	font-size: 50px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 3px;

	background: rgb(255, 255, 255, 0.3);
	border-radius: 5px;
	border: 1px solid white;
	margin: 0px;
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
			<PageTitle>{title}</PageTitle>
			{children}
			<div>
				<BackButton />
			</div>
		</Subpage>
	);
}
