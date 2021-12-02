import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const { nom_docente } = userInfo;
export const AvatarC = () => {
	return (
		<button className='btn'>
			<div className='d-flex justufy-content-center'>
				<Avatar sx={{ bgcolor: deepPurple[500] }}>{nom_docente.charAt(0)}</Avatar>
				<h6 className='mt-2 ml-2'>Mi perfil</h6>
			</div>
		</button>
	);
};
