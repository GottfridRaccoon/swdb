import React from "react";
import Header from "../header/";
import RandomPlanet from "../random-planet";
import ItemList from '../item-list'
import './Main.css'
import PersonDetails from "../person-details";
const Main = () => {
	const [personSelected, changePersonSelected] = React.useState({ select: 5 })
	const personSelect = (id) => {
		changePersonSelected({ select: id })

	}
	return (
		<div className="main-wrapper">
			<Header />
			<RandomPlanet />
			<div className="content-wrapper">
				<ItemList selectedPerson={personSelect} />
				<PersonDetails personId={personSelected.select} />
			</div>

		</div>

	)
}
export default Main