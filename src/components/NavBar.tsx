import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
import styled from "styled-components";

const Link = styled(NavLink)`
	color: #aa4586;
	font-size: 75px;
	font-weight: bold;
	letter-spacing: 3px;
	text-decoration: none;

	@keyframes growSpace {
		0% {
			letter-spacing: 0px;
		}
		100% {
			letter-spacing: 3px;
		}
	}
	letter-spacing: 3px;
	animation: growSpace 2s;

	transition: 1s;
	&:hover {
		letter-spacing: 10px;
		transition: 0.5s;
	}
`;

export function NavBar() {
	return (
		<nav className="column navbar">
			<Link to="/about">About</Link>
			<Link to="/experience">Experience</Link>
			<Link to="/projects">Projects</Link>
		</nav>
	);
}
