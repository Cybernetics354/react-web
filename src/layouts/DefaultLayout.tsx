import React, { FunctionComponent } from 'react';

import { LayoutProps } from '.';
import Header from '../components/Header';

import ImgHomePageHero from '../assets/images/homepage-hero.png';
import MainContainer, { BaseContainer } from '../components/parts/container';
import { ExtraLargeTypography, NormalTypography } from '../components/parts/typography';
import { paddingConst } from '../components/parts/positioning';
import { BaseButton } from '../components/parts/buttons';
import Footer from '../components/Footer';
import { TransitionType } from '../components/parts/visibility';
import { StaggeredOnVisible } from '../components/parts/staggered';

const testing: string = "Lorem ipsum dolor sit amet de la quentas walang tayo mga bobo putang ina mo walang utak mga bobo walang tayoaskdasd Lorem ipsum dolor sit amet de la quentas walang tayo mga bobo putang ina mo walang utak mga bobo walang tayo";

const DefaultLayout: FunctionComponent<LayoutProps> = ({
	children,
}) => {
	return (
		<div>
			<Header
				hero={{
					color: '#FBC02D',
					image: ImgHomePageHero,
					size: 850,
					content: (
						<HeaderContent />
					),
				}}
			/>
			{ children }
			<Footer className="footer">
				<div style={{
					width: "100%",
					height: "100%",
				}}>

				</div>
			</Footer>
		</div>
	);
};

const HeaderContent: React.FC = () => {
	return (
		<MainContainer style={{ ...paddingConst.only({
			top: "150px"
		}) }}>
			<StaggeredOnVisible delay={200} transitionType={TransitionType.slideLeft}>
				<ExtraLargeTypography label="Empowering Traditional Market" style={{
					color: "white",
				}} />
				<BaseContainer padding={paddingConst.only({
					bottom: 30
				})} style={{
					maxWidth: 900
				}}>
					<NormalTypography label={testing} style={{
						color: "white"
					}} />
				</BaseContainer>
				<BaseButton label="Coming Soon" backgroundColor="#7cb305" />
			</StaggeredOnVisible>
		</MainContainer>
	);
}

const FooterContent: React.FC = () => {
	return (
		<div style={{
			width: "100"
		}}>

		</div>
	);
}

export default DefaultLayout;
