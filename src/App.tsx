import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { About } from "./pages/About";
import { NavBar } from "./NavBar";
import "./css/App.css";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";

export const Row = styled.div`
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

export function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Row>
								<ColumnLeft>
									<p className="title">Bella Felaco</p>
								</ColumnLeft>
								<NavBar />
							</Row>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
