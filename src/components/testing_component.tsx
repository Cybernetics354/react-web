import React from 'react';

interface TestingState {
	name: string;
	value: number;
}

interface TestingProps {
	name?: string;
}

export default class TestingComponent extends React.Component<TestingProps ,TestingState> {
	constructor(props: TestingProps) {
		super(props);
		this.state = {
				name: "testing",
				value: 0
		}
	}
	render() {
		console.log("Render Occured");
		const { name, value } = this.state;
		return (
				<div>
					<p>{ value }</p>
					<button onClick={() => this.setState({ value: value + 1 })}>Decrement</button>
					<button onClick={() => this.setState({
						value: value - 1
					})}>Increment</button>
				</div>
		);
	}

	componentWillMount() {
		console.log("ComponentWillMount Occured");
	}

	componentWillUpdate(prevProps: any) {
		console.log(`ComponentWillUpdate Occured ${prevProps}`);
	}

	componentWillUnmount() {
		console.log("ComponentWillUnmount Occured");
	}
}
