import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
	render() {
		return (
			<ul className="pokemon-list">
				<Pokemon data={this.props.data} />
			</ul>
		);
	}
}

export default PokeList;
