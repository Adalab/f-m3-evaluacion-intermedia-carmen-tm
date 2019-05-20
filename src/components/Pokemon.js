import React from 'react';
import './Pokemon.css';
class Pokemon extends React.Component {
	constructor(props) {
		super(props);

		//Binding all my methods
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	//My methods
	handleOnClick(event) {
		const { currentTarget } = event;
		currentTarget.classList.toggle('pokemon-card--clicked');
	}

	render() {
		const { data } = this.props;

		return data.map((item, index) => {
			return (
				<div
					onClick={this.handleOnClick}
					title="Añádeme a tus favoritos"
					key={index}
					className="pokemon-card"
				>
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
				</div>
			);
		});
	}
}

export default Pokemon;
