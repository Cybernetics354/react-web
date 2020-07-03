import React, { ReactNode } from 'react';

import { Layout } from 'antd';
import { Sticky } from 'react-sticky';
import classNames from 'classnames';

import Logo from '../../assets/images/logo.png';

const { Content, Sider } = Layout;

export interface Menu {
	label: string,
	link: string,
	onClick: () => void,
}

export interface Hero {
	color?: string,
	image: string,
	size?: number,
	content: ReactNode,
}

export interface HeaderProps {
	image?: string,
	title?: string,
	menus?: Array<Menu>,
	hero?: Hero,
}

class Header extends React.Component<HeaderProps, {}> {
	render() {
		const {
			menus,
			hero,
		} = this.props;

		const headerHeight = 75;
		let stickDistance = 0;

		if (hero) {
			hero.size = hero.size || 100;
			stickDistance += hero.size + headerHeight;
		}

		return (
			<>
				<Sticky>
					{({
						style,
						isSticky,
						wasSticky,
						distanceFromTop,
						distanceFromBottom,
						calculatedHeight,
					}) => (
						<Layout
							style={style}
							className={classNames(
								'navbar',
								wasSticky && distanceFromTop <= (stickDistance * -1) ? 'sticked' : undefined,
							)}
						>
							<Sider style={{ backgroundColor: 'transparent' }}>
								<img src={ Logo } alt='ALA' className='logo' />
								<span className='logo-label'>ALA</span>
							</Sider>
							<Content className='menu-container'>
								<span className='menu-item'>
									Hello world { wasSticky && distanceFromTop !== 0 ? 'Sticked' : '' } { `(${distanceFromTop} from top)` }
								</span>
								<span className='menu-item'>
									World
								</span>
							</Content>
						</Layout>
					)}
				</Sticky>
				{hero ? (
					<div
						className='hero'
						style={{
							backgroundColor: hero.color,
							height: `calc(${headerHeight}px + ${hero.size}px)`,
							...(() => {
								let exs: any = {};
								if (hero.image) {
									exs.backgroundImage = `url('${hero.image}')`;
								}

								return exs;
							})(),
						}}
					>
						{ hero.content }
					</div>
				) : null}
			</>
		);
	}
}

export default Header;
