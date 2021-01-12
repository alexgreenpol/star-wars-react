import React from 'react';
import swapiService from '../../services/swapi-service';
import NoDataPlaceholder from '../no-data-placeholder/no-data-placeholder';
import './starship-details.css';

class StarshipDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			starship: null,
			loading: true
		}
	}

	componentDidMount() {
		this.updateStarship();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.starshipId !== this.props.starshipId) {
			this.updateStarship();
		}
	}
	
	updateStarship() {
		if(!this.props.starshipId) {
			return
		}

		swapiService.getStarship(this.props.starshipId)
		.then((starship) => {
			this.setState({ starship, loading: false })
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
						<div className="starship">
							<div className="row">								
								<div className="col-12">
									<div className="starship__details">
										<h4>{this.state.starship.name}</h4>
										<ul>
											<li>Cost: {this.state.starship.model}</li>
											<li>Cost: {this.state.starship.costInCredits}</li>
											<li>Length: {this.state.starship.length}</li>
											<li>Crew: {this.state.starship.crew}</li>
											<li>Passengers: {this.state.starship.passengers}</li>
											<li>Cargo: {this.state.starship.cargoCapacity}</li>
											<li>Max atmosphering speed: {this.state.starship.maxAtmospheringSpeed}</li>
											<li>Consumables: {this.state.starship.consumables}</li>
											<li>Hyperdrive rating: {this.state.starship.hyperdriveRating}</li>
											<li>Starship class: {this.state.starship.starshipClass}</li>											
											<li>Manufacturer: {this.state.starship.manufacturer}</li>
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
export default StarshipDetails;