import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

const Pokemon = props => {
	const { url, name, types, methodOnChange } = props;
	return (
		<article className="pokemon-card" onClick={methodOnChange}>
			<img src={url} alt={name} />
			<div className="title-container">
				<h2>{name}</h2>
			</div>
			<ul className="pokemon-type__list">
				{types.map((item, index) => {
					return (
						<li className="pokemon-type__item" key={index}>
							{item}
						</li>
					);
				})}
			</ul>
		</article>
	);
};

Pokemon.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	types: PropTypes.arrayOf(PropTypes.string).isRequired,
	methodOnChange: PropTypes.func.isRequired
};
export default Pokemon;
