import React from "react";
import "./ItemList.css"
import SwapiService from "../../services/SwapiService";
import Loader from "../loader";
const swapiService = new SwapiService()
const ItemList = ({ selectedPerson }) => {
	const [people, peopleListChange] = React.useState({ peopleList: null })
	React.useEffect(() => {
		swapiService.getPeople().then((list) => {
			peopleListChange({ peopleList: list })
		})

	}, [])
	const personSelected = (id) => { selectedPerson(id) }
	let { peopleList } = people
	if (!peopleList) {
		return <Loader />
	}
	else {
		//people.peopleList.map(e => console.log(e.results))
		const list = (arr) => arr.results.map(({ name }, id) => {
			id++

			return (
				<li className="list-group-item" key={id} onClick={() => personSelected(id)}>
					{name}
				</li>

			)
		})
		const listItem = list(peopleList)

		return (
			<div class="list-group">
				{listItem}


			</div>
		)
	}
}
export default ItemList