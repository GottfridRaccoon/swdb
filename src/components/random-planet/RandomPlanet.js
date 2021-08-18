import React from 'react'
import SwapiService from '../../services/SwapiService'
import "./RandomPlanet.css"
import Loader from '../loader'
import ErrorMessage from '../error-message'


const PlanetView = ({ planet }) => {
	return (
		<React.Fragment>
			<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.planetData.id}.jpg`} className="random-planet-image"></img>
			<div className="random-planet-description-wrapper">
				<h3>{planet.planetData.planet}</h3>
				<ul className='list-group list-group-flush'>
					<li className="list-group-item ">
						Популяция: {planet.planetData.population}
					</li>
					<li className="list-group-item">
						Период вращения: {planet.planetData.rotationPeriod}
					</li>
					<li className="list-group-item">
						Диаметр: {planet.planetData.diameter}
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}


let swapiService = new SwapiService()
const RandomPlanet = () => {



	const [planet, planetChange] = React.useState({
		planetData: {

		},

	})
	const [error, changeError] = React.useState({
		errorStatus: false
	})

	const [loading, loadingChange] = React.useState({
		loadStatus: true
	})
	const planetLoaded = (planet) => {
		planetChange({ planetData: planet })
		loadingChange({ loadStatus: false })

	}
	const onError = () => {
		changeError({ errorStatus: true })
		loadingChange({ loadStatus: false })

	}

	function updatePlanet() {
		let id = Math.floor(Math.random() * 10) + 1
		swapiService.getPlanet(id).then(planetLoaded).catch(onError)


	}
	React.useEffect(() => { updatePlanet() }, [])

	const errorMsg = error.errorStatus ? <ErrorMessage /> : null
	const hasData = !(loading.loadStatus || error.errorStatus)
	const isLoading = loading.loadStatus ? <Loader /> : null
	const content = hasData ? <PlanetView planet={planet} /> : null

	return (


		<div className="random-planet-wrapper bg-dark">

			{
				isLoading
			}
			{errorMsg}
			{content}
		</div>


	)

}

export default RandomPlanet