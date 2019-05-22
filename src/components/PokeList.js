import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokeList.css';

const PokeList = props => {
	const { data } = props;
	return (
		<ul className="pokemon-list">
			{data.map(item => {
				return (
					<li key={item.id} title="Añádeme a tus favoritos">
						<Pokemon data={data} />
					</li>
				);
			})}
		</ul>
	);
};

PokeList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeList;
