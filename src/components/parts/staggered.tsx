import React from 'react';
import { BaseVisibleTransition, TransitionType } from './visibility';
import { BaseContainer } from './container';

interface StaggeredListProps {
	delay?: number;
	specificElement?: string;
	transitionType?: TransitionType;
}

export const StaggeredOnVisible: React.FC<StaggeredListProps> = (props) => {
	const { delay, specificElement, transitionType } = props;
	let selectedElement;
	let delayNumber = 0;

	if(specificElement) {
		selectedElement = React.Children.map(props.children, (child: any, index) => {
			delayNumber += delay??400;
			if(child?.type === specificElement) {
				return (
					<BaseVisibleTransition transitionType={transitionType} visibilityOptions={{
						intervalDelay: delayNumber,
					}}>
						{ child }
					</BaseVisibleTransition>
				);
			}
		});
	} else {
		selectedElement = React.Children.map(props.children, (child: any, index) => {
			delayNumber += delay??400;
			return (
				<BaseVisibleTransition transitionType={transitionType} visibilityOptions={{
					intervalDelay: delayNumber,
				}}>
					{ child }
				</BaseVisibleTransition>
			);
		});
	}

	return (
		<BaseContainer>
			{ selectedElement }
		</BaseContainer>
	);
}
