import React from 'react';
import './random-planet.css';
import swapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/error-indicator';

class RandomPlanet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			planet: {
				id: null,
				name: null,
				population: null,
				rotationPeriod: null,
				diameter: null
			},
			loading: true,
			error: false
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.updateRandomPlanet();
		}, 1500);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded(planet) {
		setTimeout(() => {
			this.setState({ planet, loading: false })
		}, 800)
	}

	onError() {
		setTimeout(() => {
			this.setState({
				loading: false,
				error: true
			})
		}, 800)
	}

	updateRandomPlanet() {
		const randomId = Math.ceil(Math.random() * 9) + 1;
		swapiService.getPlanet(randomId)
		.then(this.onPlanetLoaded.bind(this))
		.catch(this.onError.bind(this));
	}

	render() {

		const hasData = !(this.state.loading || this.state.error)

		const spinner = this.state.loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={this.state.planet} /> : null;
		const errorIndicator = this.state.error ? <ErrorIndicator /> : null;


		return (
			<section className="random-planet-banner">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="random-planet-banner__content">
								{spinner}
								{content}
								{errorIndicator}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default RandomPlanet;