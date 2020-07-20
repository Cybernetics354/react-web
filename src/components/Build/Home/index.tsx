import React from 'react';
import MainContainer, { BaseContainer, PositionedContent, PositionedContainer, SizedBox } from '../../parts/container';
import { paddingConst, marginConst, Center } from '../../parts/positioning';
import { ExtraLargeTypography, LargeTypography, NormalTypography } from '../../parts/typography';
import { BaseVisibleTransition, TransitionType } from '../../parts/visibility';
import { BaseButton, BaseButtonType } from '../../parts/buttons';
import { StaggeredOnVisible } from '../../parts/staggered';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

interface HomeCardViewWidgetProps {
	title: string,
	description: string,
	image?: string,
	homeCardViewWidgetPosition?: HomeCardViewWidgetPosition;
}

export enum HomeCardViewWidgetPosition {
	left,
	right
}

export const HomeCardViewWidget: React.FC<HomeCardViewWidgetProps> = (props) => {
	const { title, description, image, homeCardViewWidgetPosition } = props;

	let leftMarkup = (
		<div style={{
			width: "100%",
			display: "flex",
		}}>
			<BaseContainer style={{
				width: "50%",
			}} padding={paddingConst.symmetric({
				horizontal: 80
			})}>
				<Center style={{
					textAlign: "right",
					width: "100%",
				}}>
					<BaseVisibleTransition transitionType={TransitionType.slideLeft}>
						<LargeTypography label={title} />
						<NormalTypography label={description} />
						<BaseContainer margin={marginConst.only({
							top: 30
						})}>
							<BaseButton label="Lebih lanjut" baseButtonType={BaseButtonType.outline}></BaseButton>
						</BaseContainer>
					</BaseVisibleTransition>
					{/* <StaggeredOnVisible delay={300} transitionType={TransitionType.slideLeft}>
						<LargeTypography label={title} />
						<NormalTypography label={description} />
						<BaseContainer margin={marginConst.only({
							top: 30
						})}>
							<BaseButton label="Lebih lanjut" baseButtonType={BaseButtonType.outline}></BaseButton>
						</BaseContainer>
					</StaggeredOnVisible> */}
				</Center>
			</BaseContainer>
			<BaseContainer style={{
				width: "50%"
			}}>
				<StaggeredOnVisible transitionType={TransitionType.slideRight}>
					<PositionedContainer width="100%" height={500} style={{
						...paddingConst.symmetric({
							vertical: 30,
							horizontal: 30
						})
					}}>
						<PositionedContent className="primary-color" width={300} height={450} style={{
							borderRadius: 10,
							borderWidth: 5,
							borderStyle: "solid",
							backgroundColor: "transparent",
							bottom: 0,
							left: 70
						}} />
						<PositionedContent className="primary-color" width={300} height={450} style={{
							borderRadius: 10,
							bottom: 15,
							left: 85
						}} />
						<PositionedContent style={{
							top: 100,
						}}>
							<div className="lift-up" style={{
								backgroundColor: "white",
								width: 500,
								height: 300,
								backgroundImage: `url(${image})`,
								backgroundPosition: "center",
								backgroundSize: "cover"
							}}>

							</div>
						</PositionedContent>
					</PositionedContainer>
				</StaggeredOnVisible>
			</BaseContainer>
		</div>
	);

	let rightMarkup = (
		<div style={{
			width: "100%",
			display: "flex",
		}}>
			<BaseContainer style={{
				width: "50%"
			}}>
				<BaseVisibleTransition transitionType={TransitionType.slideLeft}>
					<PositionedContainer width="100%" height={500} style={{
						...paddingConst.symmetric({
							vertical: 30,
							horizontal: 30
						})
					}}>
						<PositionedContent className="primary-color" width={300} height={450} style={{
							borderRadius: 10,
							borderWidth: 5,
							borderStyle: "solid",
							backgroundColor: "transparent",
							bottom: 0,
							right: 70
						}} />
						<PositionedContent className="primary-color" width={300} height={450} style={{
							borderRadius: 10,
							bottom: 15,
							right: 85
						}} />
						<PositionedContent style={{
							top: 100,
							right: 0,
						}}>
							<div className="lift-up" style={{
								backgroundColor: "white",
								width: 500,
								height: 300,
								backgroundImage: `url(${image})`,
								backgroundPosition: "center",
								backgroundSize: "cover"
							}}>

							</div>
						</PositionedContent>
					</PositionedContainer>
				</BaseVisibleTransition>
			</BaseContainer>
			<BaseContainer style={{
				width: "50%",
			}} padding={paddingConst.symmetric({
				horizontal: 80
			})}>
				<Center style={{
					textAlign: "left",
					width: "100%",
				}}>
					<BaseVisibleTransition transitionType={TransitionType.slideRight}>
						<LargeTypography label={title} />
						<NormalTypography label={description} />
						<BaseContainer margin={marginConst.only({
							top: 30
						})}>
							<BaseButton label="Lebih lanjut" baseButtonType={BaseButtonType.outline}></BaseButton>
						</BaseContainer>
					</BaseVisibleTransition>
				</Center>
			</BaseContainer>
		</div>
	);

	let markup;

	if(homeCardViewWidgetPosition === HomeCardViewWidgetPosition.right) {
		markup = rightMarkup;
	} else {
		markup = leftMarkup;
	}

	return (
		<BaseContainer style={{
			width: "100%"
		}} padding={paddingConst.symmetric({
			vertical: 30
		})} margin={marginConst.symmetric({
			vertical: 100
		})}>
			{ markup }
		</BaseContainer>
	);
}

interface SplashCanvasProps {
	width?: number | string,
	height?: number | string,
	className?: string,
	style?: React.CSSProperties
}

class SplashCanvas extends React.Component<SplashCanvasProps> {
	state = {
		intViewPortWidth: 0
	}

	listeningViewport() {
		const resizing = () => {
			const width = window.innerWidth;
			this.setState({
				intViewPortWidth: width
			});
			this.canvasDrawing();
		}

		window.addEventListener("resize", resizing);
		return () => {
			window.removeEventListener("resize", resizing);
		}
	}

	componentWillMount() {
		this.computingWidth();
	}

	componentDidMount() {
		this.canvasDrawing();
		this.listeningViewport();
	}

	canvasDrawing() {
		const canvas: any = this.refs.canvas;
		const ctx = canvas.getContext("2d");
		const { width, height } = canvas;

		const w = width;
		const h = height;

		ctx.moveTo(0, h * 0.4);
		ctx.quadraticCurveTo(w * 0.25, h * 0.10, w * 0.50, h * 0.50);
		ctx.quadraticCurveTo(w * 0.60, h * 0.65, w * 0.8, h * 0.5);
		ctx.quadraticCurveTo(w * 0.95, h * 0.4, w, h * 0.6);
		ctx.lineTo(w, h);
		ctx.lineTo(0, h);
		ctx.fillStyle = "#FBC02D";
		ctx.fill();

		ctx.strokeStyle = "#FBC02D";
		ctx.stroke();
	}

	computingWidth() {
		this.setState({
			intViewPortWidth: window.innerWidth,
		});
	}

	render() {
		const { width, height, className, style } = this.props;
		return (
			<canvas style={style} className={className} ref="canvas" width={width??this.state.intViewPortWidth} height={height??"300px"} />
		);
	}
}


export const SplashContainer: React.FC = (props) => {
	return (
		<BaseContainer>
			<SplashCanvas height="300px" style={{
				...marginConst.only({
					bottom: -10
				})
			}} />
			<MainContainer className="primary-color" style={{
				...marginConst.all({
					value: 0
				}),
				...paddingConst.symmetric({
					vertical: 100
				})
			}}>
				{ props.children }
			</MainContainer>
			<SplashCanvas style={{
				...marginConst.only({
					bottom: 200
				})
			}} className="transform-splash" height="300px" />
		</BaseContainer>
	);
}

export const CardViewWidget: React.FC = () => {
	return (
		<Center>
			<div style={{
				display: "flex"
			}}>
				<BaseVisibleTransition visibilityOptions={{
					offset: {bottom: -200}
				}} transitionType={TransitionType.slideLeft}>
					<Card style={{
						...marginConst.symmetric({
							horizontal: 10,
							vertical: 20
						}),
					}} hoverable cover={
						<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="example" />
					}>
						<Meta title="Testing" description="A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes." />
					</Card>
				</BaseVisibleTransition>
				<BaseVisibleTransition visibilityOptions={{
					offset: {bottom: -400}
				}} transitionType={TransitionType.slideTop}>
					<Card style={marginConst.symmetric({
						horizontal: 10,
						vertical: 20
					})} hoverable cover={
						<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="example" />
					}>
						<Meta title="Testing" description="A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes." />
					</Card>
				</BaseVisibleTransition>
				<BaseVisibleTransition visibilityOptions={{
					offset: {bottom: -200}
				}} transitionType={TransitionType.slideRight}>
					<Card style={marginConst.symmetric({
						horizontal: 10,
						vertical: 20
					})} hoverable cover={
						<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="example" />
					}>
						<Meta title="Testing" description="A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes." />
					</Card>
				</BaseVisibleTransition>
			</div>
		</Center>
	);
}

export const JoinViewWidget: React.FC = (props) => {
	return (
		<Center>
			<ExtraLargeTypography label="Now all your Cooking Needs are in your Grasp!" />
			<NormalTypography label="Ala will released soon and you can download it on your android from Play Store, or you can join with us as a Driver Partner or Warehouse Partner !!" />
			<SizedBox height={40} />
			<BaseButton baseButtonType={BaseButtonType.outline} label="Join Us" />
		</Center>
	);
}

interface ReasonContainerViewWidgetProps {
	imageUrl: string;
	title: string;
	description: string;
}

export const ReasonContainerViewWidget: React.FC<ReasonContainerViewWidgetProps> = (props) => {
	const { imageUrl, title, description } = props;
	return (
		<div style={{
			...marginConst.symmetric({
				horizontal: 50,
				vertical: 100
			}),
			width: 300,
		}}>
			<Center>
				<div style={{
					height: 300
				}}>
					<img style={{
						maxWidth: 250
					}} src={imageUrl} />
				</div>
				<ExtraLargeTypography label={title} />
				<NormalTypography style={{
					...marginConst.only({
						top: -20
					})
				}} label={description} />
			</Center>
		</div>
	)
}
