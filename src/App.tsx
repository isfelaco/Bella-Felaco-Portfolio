import React from "react";
import "./App.css";
import { Section } from "./Section";
import logo from "./UVA-logo.png";

export function App() {
	return (
		<div className="App">
			{/* <nav className="header">
				<i>
					<h2 className="title">Bella Felaco's Porfolio</h2>
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
			</nav> */}
			<div className="row">
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
			</div>

			{/* <Section title="Education" id="education">
				<div className="subsection">
					<img src={logo} className="UVA-logo" alt="logo" />
					<p className="education">
						University of Virginia, Charlottesville, VA
					</p>
					<i>
						<p className="education">Bachelor of Science in Computer Science</p>
					</i>
				</div>
				<div className="subsection">
					<h1 className="title">Relevant Coursework</h1>
					<ul>
						<li>Program and Data Representation</li>
						<li>Digital Logic Design</li>
						<li>Linear Algebra</li>
						<li>Advanced Software Development Methods</li>
					</ul>
				</div>
			</Section>
			<Section title="Projects" id="projects">
				<div className="subsection">
					<ul>
						<li>Aspirations vs. Reality in Engineering Education</li>
					</ul>
				</div>
			</Section>
			<Section title="Experience" id="experience">
				<div className="subsection"></div>
			</Section> */}
		</div>
	);
}
