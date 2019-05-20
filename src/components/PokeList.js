import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<ul className="pokemon-list">
				{/* {data.map((item, index) => {
					return (
						<li
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
									)}
								})}
							</ul>
				</li>
			);
		}); */}

				<Pokemon data={this.props.data} />
			</ul>
		);
	}
}

export default PokeList;
