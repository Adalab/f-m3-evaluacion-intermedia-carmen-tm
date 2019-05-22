import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
	//My methods
	handleOnClick(event) {
		const { currentTarget } = event;
		currentTarget.classList.toggle('pokemon-card--clicked');
	}

	render() {
		const { data } = this.props;
		return data.map(item => {
			return (
				<article className="pokemon-card" onClick={this.handleOnClick}>
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
	}
}

Pokemon.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Pokemon;
