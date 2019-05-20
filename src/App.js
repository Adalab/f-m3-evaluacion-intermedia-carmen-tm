import React from 'react';
import PokeList from './components/PokeList';
import pokemon from './assets/data';
import './App.css';

function App() {
	return (
		<div>
			<h1 className="pokelist-title">Mi lista de pokemon</h1>
			<PokeList data={pokemon} />;
		</div>
	);
}

export default App;
