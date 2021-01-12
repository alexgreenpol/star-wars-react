import React from 'react';

const PlanetView = (props) => {
	return (
		<div className="random-planet">
			<div className="random-planet__img">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`} alt="planet" />
			</div>
				
			<div className="random-planet__details">
				<h4>{props.planet.name}</h4>
				<ul>
					<li>Population: {props.planet.population}</li>
					<li>Rotation period: {props.planet.rotationPeriod}</li>
					<li>Diametr: {props.planet.diameter}</li>
				</ul>
			</div>
		</div>
	)
}

export default PlanetView;