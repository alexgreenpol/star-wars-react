import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = (props) => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-4">
						<div className="site-header__logo">
							<h4>Star Wars App</h4>
						</div>
					</div>
					<div className="col-6 col-sm-8">
						<nav>
							<NavLink to="/people" onClick={props.cleanCurrentId}>People</NavLink>
							<NavLink to="/planets" onClick={props.cleanCurrentId}>Planets</NavLink>
							<NavLink to="/starships" onClick={props.cleanCurrentId}>Starships</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;