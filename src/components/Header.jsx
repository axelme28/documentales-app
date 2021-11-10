import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {
	ADMINISTRADOR_DOCUMENTALES_VIEW,
	ADMINISTRADOR_REGISTRAR_DOCUMENTAL,
	PLATAFORMA_REGISTRAR_ADMINISTRADOR,
	PLATAFORMA_REGISTRAR_ALUMNOS,
	PLATAFORMA_REGISTRAR_PROFESOR,
	PLATAFORMA_REGISTRAR_UNIVERSIDAD,
} from '../constants/routes.constants';

const Header = () => {
	const [toggleDropDown, setToggleDropDown] = useState(false);

	return (
		<nav className='navbar navbar-expand-sm  p-3' id='barrita'>
			<Link
				className='navbar-brand'
				to='/'
				style={{ pointerEvents: 'none', color: 'darkslateblue' }}
			>
				Documentales
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						activeClassName='active'
						className='nav-item nav-link'
						exact
						to={ADMINISTRADOR_DOCUMENTALES_VIEW}
					>
						Ver Documentales
					</NavLink>

					<Dropdown
						className='ml-3'
						toggle={() => setToggleDropDown(!toggleDropDown)}
						isOpen={toggleDropDown}
					>
						<DropdownToggle caret
							style={styles.dropdown}
						>Registrar</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>
								<NavLink
									activeClassName='active'
									style={styles.link }
									exact
									to={ADMINISTRADOR_REGISTRAR_DOCUMENTAL}
								>
									Registrar Documental
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink
									activeClassName='active'
									style={styles.link}
									exact
									to={PLATAFORMA_REGISTRAR_UNIVERSIDAD}
								>
									Registrar Universidad
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink
									activeClassName='active'
									style={styles.link}
									exact
									to={PLATAFORMA_REGISTRAR_ADMINISTRADOR}
								>
									Registrar Administrador de Universidad
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink
									activeClassName='active'
									style={styles.link}
									exact
									to={PLATAFORMA_REGISTRAR_PROFESOR}
								>
									Registrar Profesor
								</NavLink>
							</DropdownItem>
							<DropdownItem>
								<NavLink
									activeClassName='active'
									style={styles.link}
									exact
									to={PLATAFORMA_REGISTRAR_ALUMNOS}
								>
									Registrar Alumnos
								</NavLink>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
			<div className='ml-2'>
				<ul className='navbar-nav '>
					<NavLink
						activeClassName='active'
						className='nav-item nav-link text-white border'
						exact
						to='/login'
					>
						Logout
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

const styles = {
	link: {
		textDecoration: 'none',
		color: 'darkslateblue',
	},
	dropdown: {
		backgroundColor: 'none',
		color: 'darkslateblue !important',
	},
};

export default Header;
