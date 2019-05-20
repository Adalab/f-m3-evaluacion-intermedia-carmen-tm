import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
	render() {
		return (
			<div>
				<ul className="pokemon-list">
					<Pokemon data={this.props.data} />
				</ul>
			</div>
		);
	}
}

export default PokeList;
