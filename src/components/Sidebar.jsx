import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import iconDoc from '../assets/icons/film.png';
import iconTarea from '../assets/icons/book.png';
import backgroud from '../assets/imgs/background4.png';
import sidebarIcon from '../assets/icons/sidebar.png';
import teams from '../assets/icons/icon-teams.png';
import { height } from '@mui/system';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { _getTeams } from '../api/index.api';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const { idUsu } = userInfo;

export const Sidebar = ({ setCurrentTeam }) => {
	const history = useHistory();
	console.log(history);
	const handleLogOut = () => {
		localStorage.clear();
		history.push('/login');
	};

	const [Teams, setTeams] = useState({});

	const getTeams = async () => {
		try {
			const idUsuario = idUsu;
			const data = { idUsuario };
			const response = await _getTeams(data);
			setTeams(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTeams();
	}, []);

	const objArray = (obj = {}) => {
		let arr = [];

		for (let key in obj) {
			arr.push(obj[key]);
		}

		return arr;
	};

	console.log(objArray(Teams));

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
						<MenuItem>Tareas</MenuItem>
					</div>
					<div className='d-flex m-2'>
						<img src={teams} style={{ ...styles.img, width: 50 }} />
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

				<div className='d-flex justify-content-center align-items-center'>
					<button
						className='btn btn-danger'
						onClick={() => {
							handleLogOut();
						}}
					>
						Log out
					</button>
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
