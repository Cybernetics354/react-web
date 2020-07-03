import React, { FunctionComponent } from 'react';

import { LayoutProps } from '.';
import Header from '../components/Header';

import ImgHomePageHero from '../assets/images/homepage-hero.png';

const DefaultLayout: FunctionComponent<LayoutProps> = ({
	children,
}) => {
	return (
		<div>
			<Header
				hero={{
					color: '#FBC02D',
					image: ImgHomePageHero,
					size: 725,
					content: (
						<div>
							Hello world
						</div>
					),
				}}
			/>
			{ children }
		</div>
	);
};

export default DefaultLayout;
