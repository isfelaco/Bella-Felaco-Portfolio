import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./NavBar";
import { Section } from "./Section";
// import logo from "./UVA-logo.png";

export function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="row">
					<div className="column left">
						<p className="title">Bella Felaco</p>
					</div>
					<NavBar />
				</div>

				<Routes>
					<Route path="/about" element={<Section title="about" />} />
					<Route path="/experience" element={<Section title="experience" />} />
					<Route path="/projects" element={<Section title="projects" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
