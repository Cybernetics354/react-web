import classNames from 'classnames';
import React, { useState } from 'react';
import ReactVisibility, { Shape } from 'react-visibility-sensor';

interface BaseVisibilityProps {
	onChanged?: (visible: boolean) => void;
	offset?: Shape | undefined;
	isActive?: boolean;
	offsetValue?: number;
	intervalDelay?: number;
}

interface BVProps {
	baseProps: BaseVisibilityProps;
}

const BaseVisibility: React.FC<BVProps> = (props) => {
	const { onChanged, offset, isActive, offsetValue, intervalDelay } = props.baseProps;
	return (
		<ReactVisibility onChange={ onChanged !== undefined ? (visible: boolean) => onChanged(visible) : undefined }
		offset={offset}
		active={isActive}
		minTopValue={offsetValue}
		intervalDelay={intervalDelay}
		delayedCall={true}>
			{ props.children }
		</ReactVisibility>
	);
}

export enum TransitionType {
	fadeIn,
	slideLeft,
	slideRight,
	slideTop,
	slideBottom,
	scaleX,
	scaleY,
	scaleXY,
}

interface BaseVisibleTransition {
	visibilityOptions?: BaseVisibilityProps;
	transitionType?: TransitionType;
	status?: boolean;
}

export const BaseVisibleTransition: React.FC<BaseVisibleTransition> = (props) => {
	const { transitionType, visibilityOptions, status } = props;
	const [ visible, changeVisible ] = useState(status??false);

	let options: BaseVisibilityProps = {
		onChanged: (vis: boolean) => {
			if(visible === false) {
				console.log(visible);
				changeVisible(vis);
			}
		},
		isActive: true,
		offsetValue: 150,
		...visibilityOptions
	}

	let transition: string | undefined;
	let activeTransition: string | undefined;

	switch (transitionType) {
		case TransitionType.fadeIn: {
			transition = "fade-in";
			activeTransition = "fade-in-active";
			break;
		}

		case TransitionType.slideLeft: {
			transition = "slide-left";
			activeTransition = "slide-left-active";
			break;
		}

		case TransitionType.slideRight: {
			transition = "slide-right";
			activeTransition = "slide-right-active";
			break;
		}

		case TransitionType.slideTop: {
			transition = "slide-top";
			activeTransition = "slide-top-active";
			break;
		}

		case TransitionType.slideBottom: {
			transition = "slide-bottom";
			activeTransition = "slide-bottom-active";
			break;
		}

		case TransitionType.scaleX: {
			transition = "scale-x";
			activeTransition = "scale-x-active";
			break;
		}

		case TransitionType.scaleY: {
			transition = "scale-y";
			activeTransition = "scale-y-active";
			break;
		}

		case TransitionType.scaleXY: {
			transition = "scale-xy";
			activeTransition = "scale-xy-active";
			break;
		}

		default: {
			transition = "fade-in";
			activeTransition = "fade-in-active";
			break;
		}
	}

	return (
		<BaseVisibility baseProps={options}>
			<div className={classNames(transition, visible === true ? activeTransition : undefined)}>
				{ props.children }
			</div>
		</BaseVisibility>
	);
}
