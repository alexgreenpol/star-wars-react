import React from 'react';
import './app.css';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import RandomPlanet from '../random-planet/random-planet';
import { Route } from 'react-router-dom';
import PersonDetails from '../person-details/person-details';
import StarshipDetails from '../starship-details/starship-details';
import PlanetDetails from '../planet-details/planet-details';
import swapiService from '../../services/swapi-service';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentId: null
		}
	}

	updateCurrentId(id) {
		this.setState({currentId: id});
	}

	cleanCurrentId() {
		this.setState({currentId: null});
	}

	render() {
		return (
			<main className="site-wrapper">
				<Header cleanCurrentId={this.cleanCurrentId.bind(this)} />
				<RandomPlanet />
	
				<section className="details">
					<div className="container">
						<div className="row">
							<div className="col-6">

								{/* People Route */}

								<Route path="/people" render={() => {
									return (
										<ItemList 
										type={'people'} 
										getData={swapiService.getAllPeople}
										updateCurrentId={this.updateCurrentId.bind(this)}
										/>
									)
								}}>
								</Route>

								{/* Planets Route */}

								<Route path="/planets" render={() => {
									return (
										<ItemList 
										type={'planets'}
										getData={swapiService.getAllPlanets}
										updateCurrentId={this.updateCurrentId.bind(this)} 
										/>
									)
								}}>
								</Route>

								{/* Starships Route */}

								<Route path="/starships" render={() => {
									return (
										<ItemList 
										type={'starships'}
										getData={swapiService.getAllStarships}
										updateCurrentId={this.updateCurrentId.bind(this)} 
										/>
									)
								}}>
								</Route>

							</div>
							<div className="col-6">
								<Route path="/people" render={() => <PersonDetails personId={this.state.currentId} />}></Route>
								<Route path="/planets" render={() => <PlanetDetails planetId={this.state.currentId} />}></Route>
								<Route path="/starships" render={() => <StarshipDetails starshipId={this.state.currentId} />}></Route>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default App;