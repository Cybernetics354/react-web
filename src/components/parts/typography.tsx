import React from "react";

interface TypographyInterface {
	label?: string;
	style?: React.CSSProperties | undefined
}

export const ExtraLargeTypography: React.FC<TypographyInterface> = (props) => {
	const { label, style } = props;
	return (
		<h1 style={{
			fontSize: "50px",
			fontWeight: "bolder",
			...style
		}}>
			{label}
		</h1>
	);
}

export const LargeTypography: React.FC<TypographyInterface> = (props) => {
	const { label, style } = props;
	return (
		<h1 style={{
			fontSize: 35,
			fontWeight: "bolder",
			...style
		}}>
			{ label }
		</h1>
	)
}

export const NormalTypography: React.FC<TypographyInterface> = (props) => {
	const { label, style } = props;
	return (
		<h3 style={{ ...style }}>
			{ label }
		</h3>
	)
}
