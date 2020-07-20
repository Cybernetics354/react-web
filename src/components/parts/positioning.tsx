import React from 'react';

interface SymmetricInterface {
	horizontal?: number | string;
	vertical?: number | string;
}

interface OnlyInterface {
	top?: number | string;
	bottom?: number | string;
	left?: number | string;
	right?: number | string;
}

interface AllInterface {
	value?: number | string;
}


// Padding Instances
class PaddingConst {
	symmetric(props: SymmetricInterface) : React.CSSProperties | undefined {
		const { horizontal, vertical } = props;
		return {
			paddingTop: vertical??0,
			paddingBottom: vertical??0,
			paddingLeft: horizontal??0,
			paddingRight: horizontal??0
		};
	}

	only(props: OnlyInterface) : React.CSSProperties | undefined {
		const { top, bottom, left, right } = props;
		return {
			paddingRight: right??0,
			paddingLeft: left??0,
			paddingBottom: bottom??0,
			paddingTop: top??0
		};
	}

	all(props: AllInterface) : React.CSSProperties | undefined {
		const { value } = props;
		return {
			paddingTop: value??0,
			paddingBottom: value??0,
			paddingLeft: value??0,
			paddingRight: value??0
		};
	}
}

export const paddingConst: PaddingConst = new PaddingConst();

// Margin Instances
class MarginConst {
	symmetric(props: SymmetricInterface) : React.CSSProperties | undefined {
		const { vertical, horizontal } = props;
		return {
			marginTop: vertical,
			marginBottom: vertical,
			marginLeft: horizontal,
			marginRight: horizontal
		};
	}

	only(props: OnlyInterface) : React.CSSProperties | undefined {
		const { top, bottom, left, right } = props;
		return {
			marginTop: top,
			marginBottom: bottom,
			marginLeft: left,
			marginRight: right
		};
	}

	all(props: AllInterface) : React.CSSProperties | undefined {
		const { value } = props;
		return {
			marginTop: value,
			marginBottom: value,
			marginLeft: value,
			marginRight: value
		};
	}
}

export const marginConst: MarginConst = new MarginConst();

interface CenterProps {
	style?: React.CSSProperties;
}

// Center Instances
export const Center: React.FC<CenterProps> = (props) => {
	const { style } = props;
	return (
		<div className="centering">
			<div style={{
				textAlign: "center",
				...style
			}}>
				{ props.children }
			</div>
		</div>
	);
}
