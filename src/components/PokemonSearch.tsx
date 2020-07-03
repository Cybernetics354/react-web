import * as React from 'react';
import { Button, Input } from 'antd';

interface IPokemonSearchProps {
	name: string;
	pokemonsCount: number;
}

interface SearchState {
	error: boolean;
	loading: boolean;
	searchValue: string;
	pokemon: Pokemon | null;
}

interface Pokemon {
	name: string;
	numberOfAbilities: number;
	baseExperience: number;
	imageUrl: string;
}

export default class PokemonSearch extends React.Component<IPokemonSearchProps, SearchState> {
	// inputRef: React.RefObject<HTMLInputElement>;
	constructor(props: IPokemonSearchProps) {
		super(props);
		this.state = {
				error: false,
				loading: false,
				pokemon: null,
				searchValue: ""
		};

		this.handleOnChanged = this.handleOnChanged.bind(this);

		// this.inputRef = React.createRef();
	}

	onSearchClick = () : void => {
		// const inputValue: string | undefined | null = this.inputRef.current?.value;
		// console.log(inputValue);
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchValue?.toLowerCase()}`).then(res => {
				this.setState({
					loading: true
				});

				if(res.status !== 200) {
					this.setState({
						error: true,
						loading: false,
					});
					return;
				}

				res.json().then(res => {
					this.setState({
						error: false,
						loading: false,
						pokemon: {
								name: res.name,
								numberOfAbilities: res.abilities.length,
								baseExperience: res.base_experience,
								imageUrl: res.sprites.front_default
						}
					})
				});
		});
	}

	asyncSearch = async () :Promise<void> => {
		this.setState({
				loading: true
		});

		const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchValue?.toLowerCase()}`);
		if(response.status !== 200) {
				this.setState({
					error: true,
					loading: false
				});

				return;
		} else {
				const data: any = await response.json();
				this.setState({
					error: false,
					loading: false,
					pokemon: {
						name: data.name,
						numberOfAbilities: data.abilities.length,
						baseExperience: data.base_experience,
						imageUrl: data.sprites.front_default
					}
				})
		}
	}

	handleOnChanged(event: React.ChangeEvent<HTMLInputElement>): void {
		this.setState({
				searchValue: event.currentTarget.value
		});
	}

	public render() {
		const { name, pokemonsCount } = this.props;
		const { error, loading, pokemon, searchValue } = this.state;

		let resultMarkup;

		if(loading) {
				resultMarkup = (
					<p>Loading...</p>
				);
		}

		if(error) {
				resultMarkup = (
					<p>Pokemon not found, please try again</p>
				);
		} else if(pokemon) {
				resultMarkup = (
					<div>
						<img src={pokemon.imageUrl} alt="pokemon"></img>
						<p>
								The Name of Pokemon is { pokemon.name }, it has { pokemon.numberOfAbilities } abilities
								and { pokemon.baseExperience } Base Experience
						</p>
					</div>
				);
		}

		return (
				<div >
					<p>The Name is {name} and Has {pokemonsCount} Pokemons</p>
					<Input type="text" value={searchValue} onChange={this.handleOnChanged}></Input>
					<p>Value Controller : {searchValue}</p>
					<Button onClick={this.asyncSearch} type="primary">Search</Button>
					{resultMarkup}
				</div>
		);
	}
}
