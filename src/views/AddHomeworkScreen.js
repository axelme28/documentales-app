import { Button } from '@mui/material';
import React from 'react';
import { Sidebar } from '../components/Sidebar';

import { styled } from '@mui/material/styles';
import iconFile from '../assets/icons/acortar (1).png';

const Input = styled('input')({
	display: 'none',
});

export const AddHomeworkScreen = () => {
	return (
		<div className='app'>
			<Sidebar />

			<div className='appMain'>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Entregar tarea</h4>
				</div>

				<div className='d-flex justify-content-end align-items-end'>
					<button
						className='btn m-4'
						style={{
							background: '#555d8b',
							color: 'white',
							borderRadius: 15,
							width: '8rem',
						}}
					>
						Entregar
					</button>
				</div>

				<div className=' justify-content-start' style={{ paddingLeft: 50 }}>
					<h5 style={{ color: '#515d8a' }}>Nombre de la tarea</h5>
					<p style={{ color: '#919191' }}>
						vence el 11 de Diciembre a las 11:00
					</p>
					<h6 className='mt-3' style={{ color: '#515d8a' }}>
						Instrucciones
					</h6>
					<p style={{ color: '#919191' }}> aqui van las instrucciones</p>
					<h6>Archivos</h6>
					<label htmlFor='contained-button-file'>
						<Button
							className='btn mt-3'
							variant='contained'
							component='span'
							style={{
								background: '#555d8b !important',
								borderRadius: 15,
							}}
						>
							Mi Trabajo
							<img
								src={iconFile}
								style={{ width: 18, marginLeft: '1rem' }}
								alt='icon'
							></img>
						</Button>
						<Input
							accept='.pdf, .doc, .docx'
							id='contained-button-file'
							multiple
							type='file'
						/>
					</label>
				</div>
			</div>
		</div>
	);
};
