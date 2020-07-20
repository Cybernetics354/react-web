import React from 'react'
import { Button } from 'antd'
import { paddingConst } from './positioning';

export interface ButtonsInterfaces {
	label: string;
	className?: string;
	directTo?: any;
	onTap: () => void;
}

const TransparentButton: React.FC<ButtonsInterfaces> = (props) => {
	const { label, onTap, className } = props;
	return (
		<Button type="text" className={className} onClick={() => onTap()}>
			{label}
		</Button>
	)
}

interface BaseButtonProps {
	backgroundColor?: string;
	borderColor?: string;
	color?: string;
	label: string;
	baseButtonType?: BaseButtonType;
}

export enum BaseButtonType {
	base,
	outline,
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
	const { backgroundColor, label, color, borderColor, baseButtonType } = props;

	let classNames;
	if(baseButtonType === BaseButtonType.outline) {
		classNames = "outline-base";
	} else {
		classNames = "base";
	}

	return (
		<Button className={classNames} style={{
			backgroundColor: backgroundColor??undefined,
			borderColor: borderColor??backgroundColor??undefined,
			color: color??undefined,
			borderRadius: "5px",
			boxShadow: `1px 1px 5px ${backgroundColor??"transparent"}`,
			...paddingConst.symmetric({
				horizontal: 30
			})
		}} size="large">
			{ label }
		</Button>
	);
}

export const MainButton: React.FC<ButtonsInterfaces> = (props) => {
	const { label , onTap } = props;
	return (
		<div className="main-button" onClick={() => onTap} style={{
			...paddingConst.symmetric({
				vertical: 10,
				horizontal: 30,
			})
		}}>
			<h3 className="main-button-text">
				{ label }
			</h3>
		</div>
	)
}

export default TransparentButton;
