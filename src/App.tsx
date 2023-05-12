import React, { ReactElement } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import "./css/App.css";

export const pages: { [id: string]: ReactElement } = {
	"/about": <About />,
	"/experience": <Experience />,
	"/projects": <Projects />,
	"/": <HomePage />,
};

export function App() {
	return (
		<div className="App">
			<HashRouter basename="/Bella-Felaco-Portfolio">
				<Routes>
					{Object.entries(pages).map(([route, element], i) => (
						<Route path={route} element={element} key={i} />
					))}
				</Routes>
			</HashRouter>
		</div>
	);
}
