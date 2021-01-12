import React from 'react';
import swapiService from '../../services/swapi-service';
import NoDataPlaceholder from '../no-data-placeholder/no-data-placeholder';
import './person-details.css';

class PersonDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			person: null,
			loading: true
		}
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.personId !== this.props.personId) {
			this.updatePerson();
		}
	}
	
	updatePerson() {
		if(!this.props.personId) {
			return
		}

		swapiService.getPerson(this.props.personId)
		.then((person) => {
			this.setState({ person, loading: false })
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
						<div className="person">
							<div className="row">								
								<div className="col-12">
									<div className="person__details">
										<h4>{this.state.person.name}</h4>
										<ul>
											<li>Height: {this.state.person.height}</li>
											<li>Mass: {this.state.person.mass}</li>
											<li>Gender: {this.state.person.gender}</li>
											<li>Birth year: {this.state.person.birthYear}</li>
											<li>Eye color: {this.state.person.eyeColor}</li>
											<li>Hair color: {this.state.person.hairColor}</li>
											<li>Skin color: {this.state.person.skinColor}</li>
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
export default PersonDetails;