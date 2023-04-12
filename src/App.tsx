import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./NavBar";
import { Section } from "./Section";
import logo from "./UVA-logo.png";

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
					<Route path="/hi" element={<Section title="hi" />} />
					{/* <Route path="/shop" element={<Shop />} /> */}
					{/* <Route path="/signin" element={<Signin />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

/* <div className="row">
					<div className="column left">
						<p className="title">Bella Felaco</p>
					</div>
					<ul className="column right">
						<a href="#about">
							<li>About</li>
						</a>
						<a href="#experience">
							<li>Experience</li>
						</a>
						<a href="#projects">
							<li>Projects</li>
						</a>
					</ul>
				</div> */
