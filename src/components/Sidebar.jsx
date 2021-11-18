import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import iconDoc from '../assets/icons/film.png';
import iconTarea from '../assets/icons/book.png';
import backgroud from '../assets/imgs/background4.png';

export const Sidebar = () => {
	return (
		<>
			{/* <div className='app '>  */}
			<ProSidebar
				style={{ height: 800, color: 'black' }}
				className='shadow-lg bg-white rounded'
			>
				<Menu iconShape='square' style={{ backgroundColor: 'white' }}>
					<MenuItem
						style={{
							backgroundColor: '#515D8A',
							color: 'white',
							marginTop: -10,
						}}
						className='d-flex justify-content-center'
					>
						Profesor
					</MenuItem>
					<div className='d-flex m-2'>
						<img src={iconDoc} style={styles.img} />
						<MenuItem>Documentales
							<Link to = '/videos'/>
						</MenuItem>
					</div>
					<div className='d-flex m-2'>
						<img src={iconTarea} style={styles.img} />
						<MenuItem>Tareas</MenuItem>
					</div>
					<SubMenu title='Teams'>
						<MenuItem style={{ marginTop: '10' }}>team 1
						<Link to = '/publicaciones'/>
						</MenuItem>
						<MenuItem>team 2</MenuItem>
					</SubMenu>
				</Menu>
			</ProSidebar>
			{/* <main className='appMain' style={styles.main}>
                hello world from main
                </main>
            </div> */}
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
