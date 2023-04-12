import React from "react";
import { NavLink } from "react-router-dom";
import "./css/App.css";
import styled from "styled-components";

const Link = styled(NavLink)`
	font-size: 75px;
	font-weight: bold;
	letter-spacing: 3px;
	animation: fadeIn 3s;
	color: #a4778b;
	text-decoration: none;

	&:hover {
		font-style: italic;
	}
`;

export function NavBar() {
	return (
		<nav className="column navbar">
			<Link className="navbar-item" to="/about">
				About
			</Link>
			<Link className="navbar-item" to="/experience">
				Experience
			</Link>
			<Link className="navbar-item" to="/projects">
				Projects
			</Link>
		</nav>
	);
}
