import React from "react";
import styled from "styled-components";
import { NavBar } from "../NavBar";

export const Page = styled.div`
	display: flex;
	height: 100%;
	gap: 100px;
`;
export const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	flex: 60%;
	justify-content: center;

	.title {
		/* text */
		color: #aa4586;
		font-size: 75px;
		font-style: italic;
		font-weight: bold;

		/* layout */
		margin-top: -150px;
		background: rgb(255, 255, 255, 0.3);
		border-radius: 0px 50px 50px 0px;
	}
`;

export function HomePage() {
	return (
		<Page>
			<ColumnLeft>
				<p className="title">Bella Felaco</p>
			</ColumnLeft>
			<NavBar />
		</Page>
	);
}
