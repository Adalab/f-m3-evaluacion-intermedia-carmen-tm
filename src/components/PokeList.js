import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
	render() {
		return (
			<div>
				<h1>Mi lista de pokemon</h1>
				<ul>
					<Pokemon data={this.props.data} />
				</ul>
			</div>
		);
	}
}

export default PokeList;
