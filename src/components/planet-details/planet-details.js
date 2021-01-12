import React from 'react';
import swapiService from '../../services/swapi-service';
import NoDataPlaceholder from '../no-data-placeholder/no-data-placeholder';
import './planet-details.css';

class PlanetDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			planet: null,
			loading: true
		}
	}

	componentDidMount() {
		this.updatePlanet();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.planetId !== this.props.planetId) {
			this.updatePlanet();
		}
	}
	
	updatePlanet() {
		if(!this.props.planetId) {
			return
		}

		swapiService.getPlanet(this.props.planetId)
		.then((planet) => {
			this.setState({ planet, loading: false })
		})
	}

	render() {
		if(this.state.loading) {
			return <NoDataPlaceholder />
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="planet">
							<div className="row">								
								<div className="col-12">
									<div className="planet__details">
										<h4>{this.state.planet.name}</h4>
										<ul>
											<li>Population: {this.state.planet.population}</li>
											<li>Rotation period: {this.state.planet.rotationPeriod}</li>
											<li>Diameter: {this.state.planet.diameter}</li>
											<li>Climate: {this.state.planet.climate}</li>
											<li>Gravity: {this.state.planet.gravity}</li>
											<li>Terrain: {this.state.planet.terrain}</li>
											<li>Surface water: {this.state.planet.surfaceWater}</li>
											<li>Orbital period: {this.state.planet.orbitalPeriod}</li>
										</ul>
									</div>
								</div>
							</div>					
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default PlanetDetails;