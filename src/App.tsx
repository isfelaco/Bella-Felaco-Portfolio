// import logo from "./UVA-logo.png";
import "./App.css";
import React from "react";
import { Section } from "./Section";

export function App() {
	return (
		<div className="App">
			<nav className="header">
				<i>
					<h4 className="title">Bella Felaco's Porfolio</h4>
				</i>
				<div className="linkRow">
					<a
						className="App-link"
						href="https://linkedin.com/in/isabella-felaco"
						target="_blank"
						rel="noopener noreferrer"
					>
						View LinkedIn
					</a>
					<a href="#education">Education</a>
					<a href="#projects">Projects</a>
					<a href="#experience">Experience</a>
				</div>
			</nav>
			<Section title="hi" content="bye" />
			<div id="education" className="section">
				<h1 className="title">Education</h1>
				<div className="subsection">
					{/* <img src={logo} className="UVA-logo" alt="logo" /> */}
					<div className="education">
						<p className="education">
							University of Virginia, Charlottesville, VA
						</p>
						<i>
							<p className="education">
								Bachelor of Science in Computer Science
							</p>
						</i>
					</div>
				</div>
				<h2 className="title">Relevant Coursework</h2>
				<div className="subsection">
					<ul>
						<li>Program and Data Representation</li>
						<li>Digital Logic Design</li>
						<li>Linear Algebra</li>
						<li>Advanced Software Development Methods</li>
					</ul>
				</div>
			</div>
			<div id="projects" className="section">
				<h1 className="title">Projects</h1>
				<div className="subsection">
					<ul>
						<li>Aspirations vs. Reality in Engineering Education</li>
					</ul>
				</div>
			</div>
			<div id="experience" className="section">
				<h1 className="title">Experience</h1>
				<div className="subsection"></div>
			</div>
		</div>
	);
}
