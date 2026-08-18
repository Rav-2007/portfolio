import React from "react";
import "./LoaderLogo.css";

function LogoLoader(props) {
	const theme = props.theme || {};
	const bg = (theme.splashBg || "").toString();
	const body = (theme.body || "").toString();

	let textColor = body || "#ffffff";
	try {
		if (body && bg && body.toLowerCase() === bg.toLowerCase()) {
			textColor = bg.toLowerCase() === "#ffffff" || bg.toLowerCase() === "white" ? "#000000" : "#ffffff";
		}
	} catch (e) {
		textColor = "#ffffff";
	}

	return (
		<svg
			className="raw_logo"
			viewBox="0 0 440 305"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Ravi kiran"
		>
			<rect width="100%" height="100%" fill="transparent" />
			<g transform="translate(220,150)">
				<text
					x="0"
					y="12"
					textAnchor="middle"
					fontFamily="'Euro Roman', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
					fontSize="48"
					fill={textColor}
				>
					Ravi kiran
				</text>
			</g>
		</svg>
	);
}

export default LogoLoader;
