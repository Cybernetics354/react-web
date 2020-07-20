import React from 'react';
import { paddingConst } from './positioning';

interface BasicContainerProps {
	padding?: string;
	style?: React.CSSProperties;
	className?: string;
}

interface BaseContainerProps {
	padding?: React.CSSProperties;
	margin?: React.CSSProperties;
	style?: React.CSSProperties;
	className?: string;
}

export const BaseContainer : React.FC<BaseContainerProps> = (props) => {
	const { padding, margin, style, className } = props;
	return (
		<div className={ className } style={{ ...padding, ...margin, ...style }}>
			{ props.children }
		</div>
	);
}

const MainContainer : React.FC<BasicContainerProps> = (props) => {
	const { padding, style, className } = props;
	if(padding) {
		return (
			<div className={className} style={{ paddingLeft: padding, paddingRight: padding, ...style}}>
				{ props.children }
			</div>
		);
	}

	return (
		<BaseContainer className={className} padding={paddingConst.symmetric({horizontal: "10%"})}>
			<div style={{ ...style }}>
				{ props.children }
			</div>
		</BaseContainer>
	);
}


// PositionedContianer Instances
interface PositionedContentProps {
	top?: number,
	bottom?: number,
	left?: number,
	right?: number,
	zIndex?: number,
	width?: number | string,
	height?: number | string,
	style?: React.CSSProperties,
	className?: string,
}

export const PositionedContent: React.FC<PositionedContentProps> = (props) => {
	const { top, bottom, left, right, zIndex, width, height, style, className } = props;
	return (
		<div style={{
			position: "absolute",
			top: top,
			bottom: bottom,
			left: left,
			right: right,
			zIndex: zIndex,
			width: width,
			height: height,
			...style
		}} className={className}>
			{ props.children }
		</div>
	);
}

interface PositionedContainerProps {
	width: number | string;
	height: number | string;
	style?: React.CSSProperties;
}

export const PositionedContainer: React.FC<PositionedContainerProps> = (props) => {
	const { width, height, style } = props;
	return (
		<div style={{
			position: "relative",
			width: width,
			height: height,
			...style
		}}>
			{ props.children }
		</div>
	)
}

interface LiftedUpContainerProps {
	style?: React.CSSProperties;
}

export const LiftedUpContainer: React.FC<LiftedUpContainerProps> = (props) => {
	const { style } = props;
	return (
		<div className="lift-up" style={{
			...style
		}}>
			{ props.children }
		</div>
	);
}

interface SizedBoxProps {
	width?: number | string;
	height?: number | string;
	style?: React.CSSProperties;
}

export const SizedBox: React.FC<SizedBoxProps> = (props) => {
	const { width, height, style } = props;
	return (
		<div style={{
			width: width,
			height: height,
			...style
		}}>
			{ props.children }
		</div>
	);
}



export default MainContainer;
