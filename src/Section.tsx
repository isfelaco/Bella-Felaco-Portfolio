import React, { ReactNode } from "react";
import "./css/Section.css";

type Props = {
	title: string;
	children?: ReactNode | ReactNode[];
};

export function Section(props: Props) {
	const { title, children } = props;
	return (
		<div className="section">
			<p className="title">{title}</p>
			{children}
		</div>
	);
}
