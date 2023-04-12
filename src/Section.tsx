import React, { ReactNode } from "react";
import "./Section.css";

type Props = {
	title: string;
	content?: ReactNode;
	id?: string;
	children?: ReactNode | ReactNode[];
};

export function Section(props: Props) {
	const { title, content, id, children } = props;
	return (
		<div className="section" id={id}>
			<h1 className="title">{title}</h1>
			{children}
		</div>
	);
}
