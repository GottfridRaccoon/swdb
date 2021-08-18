import React, { useEffect } from "react";
import "./PersonDetails.css"
import SwapiService from "../../services/SwapiService";
import Loader from "../loader";
const swapiService = new SwapiService()


const PersonItems = ({ item }) => {
	return (
		<div className=" bg-dark person-details-wrapper">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${item.person.id}.jpg`} className="person-img"></img>
			<div className="person-description-wrapper">
				<h3>{item.person.name}</h3>
				<ul className='list-group list-group-flush person-details-list-group'>
					<li className="list-group-item ">
						{item.person.gender}
					</li>
					<li className="list-group-item">
						{item.person.birthYear}
					</li>
					<li className="list-group-item">
						{item.person.eyeColor}
					</li>
				</ul>
			</div>

		</div >
	)
}
const PersonDetails = ({ personId }) => {
	const [DetailsOfPerson, personDetailsChange] = React.useState({ person: {} })
	const [isLoaded, isLoadedChange] = React.useState({ loaded: false })



	const personUpdate = () => {

		if (!personId) {

			return
		}
		swapiService.getPerson(personId)


			.then(person => personDetailsChange({ person }))


	}

	const Id = personId !== DetailsOfPerson.person.id
	useEffect(() => {
		if (Id) {

			personUpdate()

			//		console.log(PersonDetails.person)

		}



	})
	useEffect(() => {
		personUpdate()



	}, [])

	if (!DetailsOfPerson.person) {
		return <h3>Выберете персонажа</h3>
	}
	if (isLoaded.loaded) {

		return <Loader />
	}
	return (
		<PersonItems item={DetailsOfPerson} />
	)




}
export default PersonDetails