import React from 'react';
import { Center } from './positioning';

interface FloatingActionButtonProps {
	style?: React.CSSProperties
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = (props) => {
	const { style } = props;
	return (
		<div style={{
			boxShadow: "1px 1px 10px grey",
			borderRadius: "100%",
			right: 50,
			bottom: 50,
			position: "fixed",
			...style
		}}>
			<Center>
				{ props.children }
			</Center>
		</div>
	);
}
