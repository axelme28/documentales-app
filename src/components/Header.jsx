import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import { DOCUMENTALES_VIEW, REGISTRAR_DOCUMENTAL } from '../constants/routes.constants';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
		<Link 
			className="navbar-brand" 
			to="/"
		>
			Documentales
		</Link>

		<div className="navbar-collapse">
			<div className="navbar-nav">

				<NavLink 
					activeClassName="active"
					className="nav-item nav-link" 
					exact
					to= {DOCUMENTALES_VIEW}
				>
					Ver Documentales
				</NavLink>

				<NavLink 
					activeClassName="active"
					className="nav-item nav-link" 
					exact
					to={REGISTRAR_DOCUMENTAL}
				>
					Registrar Documental
				</NavLink>
				</div>
            </div>
				<div className="ml-2">
                <ul className="navbar-nav ">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
				</ul>
			</div>
			
	</nav>
)
};

export default Header;
