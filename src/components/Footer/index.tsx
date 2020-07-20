import React from 'react'
import { BaseContainer } from '../parts/container';
import { paddingConst } from '../parts/positioning';


interface FooterProps {
	className?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
	const { className } = props;
	return (
		<BaseContainer className={ className } style={{
			height: 300,
			width: "100%"
		}} padding={paddingConst.symmetric({
			vertical: 50,
			horizontal: "10%"
		})}>
			{ props.children }
		</BaseContainer>
	);
}

export default Footer;
