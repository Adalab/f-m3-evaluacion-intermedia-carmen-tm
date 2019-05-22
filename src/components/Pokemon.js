import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

const Pokemon = props => {
	const { data, methodOnChange } = props;
	return data.map(item => {
		return (
			<article className="pokemon-card" onClick={methodOnChange}>
				<img src={item.url} alt="Imagen de Pokemon" />
				<div className="title-container">
					<h2>{item.name}</h2>
				</div>
				<ul className="pokemon-type__list">
					{item.types.map((item, index2) => {
						return (
							<li className="pokemon-type__item" key={index2}>
								{item}
							</li>
						);
					})}
				</ul>
			</article>
		);
	});
};

Pokemon.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	methodOnChange: PropTypes.func.isRequired
};
export default Pokemon;
