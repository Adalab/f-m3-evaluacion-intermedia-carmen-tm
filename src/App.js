import React from 'react';
import PokeList from './components/PokeList';
import pokemonArr from './assets/data';
import AppPokemonTitle from './AppPokemonTitle.png';
import './App.css';

function App() {
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
				<PokeList data={pokemonArr} />;
			</main>
		</div>
	);
}

export default App;
