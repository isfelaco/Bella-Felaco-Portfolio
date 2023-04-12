import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import "./css/App.css";
import { NavBar } from "./NavBar";
import { Section } from "./Section";
// import logo from "./UVA-logo.png";

export function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div className="row">
								<div className="column left">
									<p className="title">Bella Felaco</p>
								</div>
								<NavBar />
							</div>
						}
					/>
					<Route path="/about" element={<About />} />
					{/* <Route path="/experience" element={<Section title="Experience" />} /> */}
					{/* <Route path="/projects" element={<Section title="Projects" />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
