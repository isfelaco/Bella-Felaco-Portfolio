import React, { ReactNode } from "react";
import { BackButton } from "./components/BackButton";
import "./css/App.css";

type Props = {
	title: string;
	children?: ReactNode | ReactNode[];
};

export function Section(props: Props) {
	const { title, children } = props;
	return (
		<div className="section">
			<p className="pageTitle">{title}</p>
			{children}
			<BackButton />
		</div>
	);
}
