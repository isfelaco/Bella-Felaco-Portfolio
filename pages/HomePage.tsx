import React from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Column } from "../css/SharedStyles";

export const Page = styled.div`
	display: flex;
	height: 100vh;
`;
export const ColumnLeft = styled(Column)`
	flex: 60%;
`;

const Title = styled.p`
	/* text */
	color: white;
	text-shadow: 2px 3px 0 #aa4586, 1px 3px 0 #aa4586, 1px 3px 0 #aa4586;
	font-size: 75px;
	font-style: italic;
	font-weight: bold;

	/* layout */
	position: absolute;
	top: 150px;
	background: rgb(255, 255, 255, 0.3);
	border-radius: 0px 50px 50px 0px;
	padding: 0px 100px 0px 100px;

	@keyframes growSpacing {
		0% {
			letter-spacing: 3px;
		}
		100% {
			letter-spacing: 10px;
		}
	}
	position: absolute;
	letter-spacing: 10px;
	animation: growSpacing 2s;
`;

export function HomePage() {
	return (
		<Page>
			<ColumnLeft>
				<Title>Bella Felaco</Title>
			</ColumnLeft>
			<NavBar />
		</Page>
	);
}
