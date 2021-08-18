class SwAPIquery {
	async query(url) {
		const res = await fetch("http://swapi.dev" + url)

		try {
			if (!res.ok) {
				throw new Error(`Ошибка запроса по url ${this.url}, номер ошибки: ${res.status}`)
			}
			return res.json()
		}
		catch (e) {
			console.log('Ошибка: ', e)
		}
	}
}
export default class SwapiService extends SwAPIquery {
	async getPeople() {
		let res = await super.query(`/api/people/`)
		return res
	}
	async getPerson(id) {
		let person = await super.query(`/api/people/` + id)
		return this.tranformPerson(person)
	}
	async getPlanets() {
		let res = await super.query(`/api/planets/`)
		return res
	}
	async getPlanet(id) {
		let planet = await super.query(`/api/planets/` + id)
		return this.transformPlanet(planet)
	}
	async getStarships() {
		let res = await super.query(`/api/stapships/`)
		return res
	}
	async getStarship(id) {
		let starship = await super.query(`/api/starships/` + id)
		return this.transformStarship(starship)
	}
	extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1]
	}
	transformPlanet = (planet) => {
		return {
			id: this.extractId(planet),
			planet: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}

	}
	transformStarship = (starship) => {
		return {
			id: this.extractId(starship),
			name: starship.name,
			model: starship.model,
			costInCredits: starship.costInCredits,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity

		}

	}
	tranformPerson = (person) => {
		return {
			id: this.extractId(person),
			gender: person.gender,
			name: person.name,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}

	}

}