import React from "react"
import "./Header.css"
const Header = () => {
	return (<div className="d-flex header-wrapper">
		<h3 ><a href="#" className="logo"> Star DB</a></h3>
		<ul className="d-flex header-navigation" >

			<li><a href="#">Люди</a></li>
			<li><a href="#">Планеты</a></li>
			<li><a href="#">Корабли</a></li>
		</ul>

	</div>)
}
export default Header