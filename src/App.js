import React from 'react';
import PokeList from './components/PokeList';
import pokemon from './assets/data';
import AppPokemonTitle from './AppPokemonTitle.png';
import './App.css';

function App() {
	return (
		<div>
			<header className="App-header">
				{/* <h1 className="pokelist-title">Mi lista de pokemon</h1> */}
				<img
					className="pokelist-title"
					src={AppPokemonTitle}
					alt="Mi lista de Pokemon"
				/>
			</header>
			<main>
				<PokeList data={pokemon} />;
			</main>
		</div>
	);
}

export default App;
