import React from 'react';
import MainContainer, { BaseContainer } from '../../components/parts/container';
import { marginConst, Center } from '../../components/parts/positioning';
import { ExtraLargeTypography, NormalTypography } from '../../components/parts/typography';
import { BaseVisibleTransition, TransitionType } from '../../components/parts/visibility';
import { CardViewWidget, HomeCardViewWidget, HomeCardViewWidgetPosition, JoinViewWidget, ReasonContainerViewWidget, SplashContainer } from '../../components/Build/Home';
import Image1 from '../../assets/images/pasar/batch_3.jpg';
import Image2 from '../../assets/images/pasar/batch_5.jpg';
import Reasons1 from '../../assets/images/reasons/fast.png';
import Reasons2 from '../../assets/images/reasons/anywhere.png';
import Reasons3 from '../../assets/images/reasons/simple.png';

const lipsum = "Integer rutrum ac eros et consequat. Ut a est aliquet, finibus quam porttitor, volutpat purus. Vivamus dui dui, blandit vitae volutpat quis, condimentum a mi. Maecenas ac diam laoreet, vestibulum diam sit amet, venenatis odio. Fusce vestibulum dictum enim, a interdum quam fermentum a. In vehicula in felis malesuada tempus. Sed dolor eros, tristique ac mauris ac, pellentesque pellentesque justo. Praesent pretium felis in purus elementum laoreet. Vivamus id lacus consequat, ultrices est id, finibus urna.";

class HomePage extends React.Component<any, any> {
	render() {
		return (
			<BaseContainer>
				<MainContainer>
					<HomeReleaseCountdown />
					<HomeCardViewWidget title="Lorem Ipsum" description={lipsum} image={Image1} />
					<HomeCardViewWidget title="Testing" description={lipsum} image={Image2} homeCardViewWidgetPosition={HomeCardViewWidgetPosition.right} />
				</MainContainer>
				<SplashContainer>
					<MainContainer>
						<Center>
							<BaseVisibleTransition transitionType={TransitionType.slideBottom}>
								<ExtraLargeTypography label="Why Ala ?" />
								<NormalTypography style={{
									...marginConst.only({
										top: -30
									})
								}} label="Reasons why you should use Ala" />
							</BaseVisibleTransition>
							<div style={{
								zIndex: 9,
								color: "black",
								display: "flex",
								textAlign: "center",
							}}>
								<BaseVisibleTransition visibilityOptions={{
									offset: {bottom: -200}
								}} transitionType={TransitionType.slideLeft}>
									<ReasonContainerViewWidget imageUrl={Reasons1} title="Fast" description="Just order your needs and it will be arrived to you less than a day, or even an hour !" />
								</BaseVisibleTransition>
								<BaseVisibleTransition visibilityOptions={{
									offset: {bottom: -300}
								}} transitionType={TransitionType.slideTop}>
									<ReasonContainerViewWidget imageUrl={Reasons2} title="Anywhere" description="You can order your needs anywhere you want and let the driver deliver it for you !" />
								</BaseVisibleTransition>
								<BaseVisibleTransition visibilityOptions={{
									offset: {bottom: -200}
								}} transitionType={TransitionType.slideRight}>
									<ReasonContainerViewWidget imageUrl={Reasons3} title="Simple" description="Simply check and choose your needs effortlessly and wait the driver deliver to your address !" />
								</BaseVisibleTransition>
							</div>
						</Center>
					</MainContainer>
				</SplashContainer>
				<MainContainer style={{
					...marginConst.only({
						top: -100
					}),
				}}>
					<Center>
						<BaseVisibleTransition transitionType={TransitionType.slideBottom}>
							<ExtraLargeTypography label="Blog" />
							<NormalTypography style={{
								...marginConst.only({
									top: -30
								})
							}} label="Lorem ipsum dolor sit amet de la quentas" />
						</BaseVisibleTransition>
					</Center>
					<CardViewWidget />
				</MainContainer>
				<MainContainer style={{
					...marginConst.symmetric({
						vertical: 200
					})
				}}>
					<BaseVisibleTransition transitionType={TransitionType.fadeIn}>
						<JoinViewWidget />
					</BaseVisibleTransition>
				</MainContainer>
			</BaseContainer>
		);
	}
}

const HomeReleaseCountdown: React.FC = () => {
	return (
		<div style={{
			width: "100%",
			height: 400,
			textAlign: "center",
		}}>
			<BaseVisibleTransition transitionType={TransitionType.slideTop}>
				<BaseContainer margin={marginConst.only({
					top: -100,
				})} style={{
					width: "100%",
					height: 400,
					backgroundColor: "white"
				}}>
					<Center>
						<div>
							<h1 style={{
								height: 25
							}}>Release Countdown</h1>
							<h4>Get ready for Ala Launcing</h4>
						</div>
						<ExtraLargeTypography label="7d : 9h : 54m : 23s" />
					</Center>
				</BaseContainer>
			</BaseVisibleTransition>
		</div>
	);
}

export default HomePage;
