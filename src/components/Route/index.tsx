import React, { FunctionComponent, ComponentType, ComponentClass } from 'react';
import { Route as ReactRoute, RouteProps as ReactRouteProps } from 'react-router-dom';

import { LayoutProps } from '../../layouts';

export interface RouteProps extends ReactRouteProps {
	layout?: ComponentType<LayoutProps>,
	component: ComponentClass,
}

const EmptyLayout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
	return (
		<>{ props.children }</>
	);
}

class Route extends ReactRoute<RouteProps> {
	render() {
		const {
			component: Component,
			layout,
			...rest
		} = this.props;

		const Layout: ComponentType<LayoutProps> = layout || EmptyLayout;

		return (
			<ReactRoute
				{...rest}
				render={props => (
					<Layout>
						<Component {...props} />
					</Layout>
				)}
			/>
		);
	}
}

export default Route;
