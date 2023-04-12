import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const Link = styled(NavLink)`
	font-size: 75px;
	font-weight: bold;
	letter-spacing: 3px;
	animation: fadeIn 3s;

	&:hover {
		font-style: italic;
	}
`;

export function NavBar() {
	return (
		<nav className="column right">
			<ul>
				<li>
					<Link className="navbar-item" to="/about">
						About
					</Link>
				</li>
				<li>
					<Link className="navbar-item" to="/experience">
						Experience
					</Link>
				</li>
				<li>
					<Link className="navbar-item" to="/projects">
						Projects
					</Link>
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
