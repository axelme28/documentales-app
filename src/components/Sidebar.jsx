import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import iconDoc from '../assets/icons/film.png';
import iconTarea from '../assets/icons/book.png';
import backgroud from '../assets/imgs/background4.png';
// import sidebarIcon from '../assets/icons/sidebar.png';
import teams from '../assets/icons/icon-teams.png';
// import { height } from '@mui/system';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { _getTeams } from '../api/index.api';
import { BackAndNext } from './BackAndNext';
import { AvatarC } from './Avatar';

const initialStateUser = {
	apellido_materno: 'Perez',
	apellido_paterno: 'Tito',
	fecha_naci: '1990-01-03',
	id: 9,
	idUsu: 73,
	no_trabajador: '00214',
	nom_docente: 'Eton',
};

export const Sidebar = ({ setCurrentTeam }) => {
	const history = useHistory();
	const [Teams, setTeams] = useState({});
	const [usuario, setUsuario] = useState(initialStateUser);

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		if (userInfo) {
			setUsuario(userInfo);
		}
	}, []);

	useEffect(() => {
		getTeams();
	}, []);

	const handleLogOut = () => {
		localStorage.clear();
		history.push('/login');
	};

	const getTeams = async () => {
		try {
			const idUsuario = usuario.idUsu;
			const data = { idUsuario };
			const response = await _getTeams(data);
			if (JSON.stringify(response) !== JSON.stringify(Teams)) {
				setTeams(response);
				const teamsStr = JSON.stringify(objArray(response));
				localStorage.setItem('teams', teamsStr);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const objArray = (obj = {}) => {
		let arr = [];

		for (let key in obj) {
			arr.push(obj[key]);
		}

		return arr;
	};

	return (
		<>
			{/* <div className='app '>  */}
			<ProSidebar
				style={{ height: '773px', color: 'black' }}
				className='shadow-lg bg-white rounded'
			>
				<Menu
					iconShape='square'
					style={{ backgroundColor: 'white', height: 641 }}
				>
					<h4
						className='d-flex justify-content-center'
						style={{
							backgroundColor: '#515D8A',
							color: 'white',
							marginTop: -10,
						}}
					>
						Profesor
					</h4>

					<BackAndNext />

					<div className='d-flex m-2'>
						<img
							src={iconDoc}
							style={{ ...styles.img, marginLeft: 18 }}
							alt='iconDoocumentales'
						/>
						<MenuItem>
							Documentales
							<Link to='/videos' />
						</MenuItem>
					</div>
					<div className='d-flex m-2'>
						<img
							src={iconTarea}
							style={{ ...styles.img, marginLeft: 18 }}
							alt='iconTareas'
						/>
						<MenuItem>
							Tareas
							<Link to='/tareas' />
						</MenuItem>
					</div>
					<div className='d-flex m-2'>
						<img
							src={teams}
							style={{ ...styles.img, width: 50 }}
							alt='imagen'
						/>
						<SubMenu title='Teams'>
							{objArray(Teams).map(team => {
								const { nombre } = team;
								return (
									<MenuItem style={{ marginTop: '10' }}>
										{nombre}
										<Link
											to='/publicaciones'
											onClick={() => setCurrentTeam(team)}
										/>
									</MenuItem>
								);
							})}
							<MenuItem>
								Nuevo equipo
								<Link to='/nuevo-equipo' />
							</MenuItem>
						</SubMenu>
					</div>
				</Menu>

				<div className='d-flex justify-content-start align-items-start ml-4'>
					<AvatarC />
				</div>
			</ProSidebar>
			{/* </div> */}
		</>
	);
};

const styles = {
	img: {
		height: '30px',
		width: '30px',
	},
	main: {
		background: `url${backgroud}`,
	},
};
