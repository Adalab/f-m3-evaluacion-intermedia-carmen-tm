import React from 'react';
import './Pokemon.css';

// class Pokemon extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		//Bind my methods
// 		this.paintItems = this.paintItems.bind(this);
// 	}
// 	//Class Methods
// 	paintItems() {
// 		const { data } = this.props;
// 		console.log(data);
// 		data.map((item, index) => {
// 			return (
// 				<div key={index} className="pokemon-card">
// 					{/* <img src="" alt="" /> */}
// 					<h2>{item.name}</h2>
// 					<ul>
// 						<li>my type</li>
// 					</ul>
// 				</div>
// 			);
// 		});
// 	}

// 	render() {
// 		const { data } = this.props;
// 		const { paintItems } = this;
// 		return { paintItems };
// 	}
// }

// export default Pokemon;

class Pokemon extends React.Component {
	render() {
		const { data } = this.props;

		return data.map((item, index) => {
			return (
				<div key={index} className="pokemon-card">
					<img src={item.url} alt="" />
					<h2>{item.name}</h2>
					<ul className="pokemon-list">
						{item.types.map((item, index2) => {
							return (
								<li className="pokemon-type" key={index2}>
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
