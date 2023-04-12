import React from "react";

type Props = {
	title: string;
	content: string;
};

export function Section(props: Props) {
	const { title, content } = props;
	return (
		<div className="section">
			<h1>{title}</h1>
		</div>
	);
}
