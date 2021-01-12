class SwapiService {
  constructor() {
    this.url = 'https://swapi.dev/api'
  }
  async getResource(url) {
    const res = await fetch(`${this.url}${url}`);
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }
    
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people');
    return res.results.map((person) => this._transformPerson(person));
  }
  getAllPlanets = async () => {
    const res = await this.getResource('/planets');
    return res.results.map((planet) => this._transformPlanet(planet));
  }
  getAllStarships = async () => {
    const res = await this.getResource('/starships');
    return res.results.map((starship) => this._transformStarship(starship));
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }
  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _extractUrl(item) {
    const idRegExp = /(?:\w+:)?\/\/[^\/]+\w+\/+\w*[^\/]+([^?#]+)/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water,
      orbitalPeriod: planet.orbital_period
    }
  }
  _transformStarship(starship) {
    return {
			id: this._extractId(starship),
			name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      maxAtmospheringSpeed: starship.max_atmosphering_speed,
      consumables: starship.consumables,
      hyperdriveRating: starship.hyperdrive_rating,
      starshipClass: starship.starship_class
    }
  }
  _transformPerson(person) {
    return {
      id: this._extractId(person),
      url: this._extractUrl(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      skinColor: person.skin_color
    }
  }
}

export default new SwapiService();