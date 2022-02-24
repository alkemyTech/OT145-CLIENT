import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonElement = ({ element }) => {
	console.log(element);

	switch (element.type) {
		case "img":
			return (
				<Skeleton variant='rectangular' width={element.props.style ? element.props.style.width : 300} height={element.props.style ? element.props.style.height : 300} >
					<img src={element.props.src} alt={element.props.alt} />
				</Skeleton>
			);
		case "h1":
			return (
				<Skeleton>
					<h1>{element.props.children}</h1>
				</Skeleton>
			);
		case "p":
			return (
				<Skeleton>
					<p>{element.props.children}</p>
				</Skeleton>
			);
		default:
			return null;
	}
};

export default function SkeletonLayout({ children }) {
	console.log(children);

	return (
		<>
			{children.map((element, index) => (
				<SkeletonElement element={element} key={index} />
			))}
		</>
	);
}
