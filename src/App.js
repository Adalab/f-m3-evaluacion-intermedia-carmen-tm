import React from 'react';
import PokeList from './components/PokeList';
import pokemonArr from './assets/data';
import AppPokemonTitle from './AppPokemonTitle.png';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		//Bind my methods
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(event) {
		const { currentTarget } = event;
		currentTarget.classList.toggle('pokemon-card--clicked');
	}

	render() {
		return (
			<div>
				<header className="App-header">
					<img
						className="pokelist-title"
						src={AppPokemonTitle}
						alt="Mi lista de Pokemon"
					/>
				</header>
				<main>
					<PokeList data={pokemonArr} methodOnChange={this.handleOnClick} />;
				</main>
			</div>
		);
	}
}

export default App;
