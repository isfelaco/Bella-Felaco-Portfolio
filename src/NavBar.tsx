import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

export function NavBar() {
	return (
		<nav className="column right">
			<ul>
				<li>
					<NavLink className="navbar-item" to="/about">
						About
					</NavLink>
				</li>
				<li>
					<NavLink className="navbar-item" to="/experience">
						Experience
					</NavLink>
				</li>
				<li>
					<NavLink className="navbar-item" to="/projects">
						Projects
					</NavLink>
				</li>
			</ul>
		</nav>
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
