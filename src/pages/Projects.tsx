import React, { useState } from "react";
import { Section } from "../components/Section";
import ReactPlayer from "react-player";

export function Projects() {
	return (
		<Section title="Projects">
			<ReactPlayer url="Movie.mp4" controls={true}></ReactPlayer>
		</Section>
	);
}
