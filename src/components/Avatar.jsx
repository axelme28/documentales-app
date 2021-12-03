import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const initialStateUser = {
	apellido_materno: 'Perez',
	apellido_paterno: 'Tito',
	fecha_naci: '1990-01-03',
	id: 9,
	idUsu: 73,
	no_trabajador: '00214',
	nom_docente: 'Eton',
};

export const AvatarC = () => {
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [usuario, setUsuario] = useState(initialStateUser);

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		if (userInfo) {
			setUsuario(userInfo);
		}
	}, []);

	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		localStorage.removeItem('userInfo');
		history.push('/plataforma/log-in');
	};
	const handleProfile = () => {
		history.push('/mi-perfil');
	};

	return (
		<div>
			<Button
				id='demo-positioned-button'
				aria-controls='demo-positioned-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<div className='d-flex justufy-content-center'>
					<Avatar sx={{ bgcolor: deepPurple[500] }}>
						{usuario.nom_docente.charAt(0)}
					</Avatar>
					<h6 className='mt-2 ml-2' style={{ color: 'black' }}>
						Mi perfil
					</h6>
				</div>
			</Button>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem onClick={handleProfile}>Ver mi perfil</MenuItem>
				<MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
				<MenuItem onClick={handleClose}>Cerrar</MenuItem>
			</Menu>
		</div>
	);
};
