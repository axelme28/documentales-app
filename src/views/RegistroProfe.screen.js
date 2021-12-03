import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/profesor.png';
import MainLayout from '../layout/MainLayout';
import { _altaUsuario } from '../api/index.api';

import Swal from 'sweetalert2';

const initialState = {
	typeUser: 'profesor',
	nombre: '',
	apellidoMaterno: '',
	noTrabajador: '',
	fechaNacimiento: '',
	apellidoPaterno: '',
	email: '',
	password: '',
	idRol: 'profesor',
	idUniversidad: 1,
};

export const RegistroProfescreen = () => {
	const [values, , handleInputChange, reset] = useForm(initialState);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const {
				typeUser,
				nombre,
				apellidoMaterno,
				noTrabajador,
				fechaNacimiento,
				apellidoPaterno,
				email,
				password,
				idRol,
				idUniversidad,
			} = values;

			const data = {
				typeUser,
				nombre,
				apellidoMaterno,
				noTrabajador,
				fechaNacimiento,
				apellidoPaterno,
				email,
				password,
				idRol,
				idUniversidad,
			};

			const result = await _altaUsuario(data);
			if ((result.msg = 'Profesor creado correctamente')) {
				Swal.fire('!Profesor creado correctamente!');
				reset();
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Hubo un error',
				});
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'No se pudo registrar el profesor, intenta más tarde',
			});
		}
	};

	return (
		<>
			<MainLayout>
				<Grid container component='main' sx={{ height: '100vh' }}>
					<Grid item xs={false} sm={4} md={6} sx={styles.image} />
					<Grid
						item
						xs={12}
						sm={8}
						md={6}
						component={Paper}
						elevation={6}
						square
					>
						<div style={{ marginTop: 50 }}>
							<Box sx={styles.box}>
								<Typography component='h1' variant='h5'>
									Registrar Profesor
								</Typography>
								<div className='d-flex justify-content-between'>
									<Box
										component='form'
										noValidate
										sx={{ mt: 1, mx: 2 }}
									>
										<TextField
											autoComplete='name'
											autoFocus
											fullWidth
											id='nombre'
											label='Nombre'
											margin='normal'
											name='nombre'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											id='materno'
											label='Apellido Materno'
											margin='normal'
											name='apellidoMaterno'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											id='noTrabajador'
											label='No.Trabajador'
											margin='normal'
											name='noTrabajador'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											id='fechaNacimiento'
											label='Fecha de Nacimiento'
											margin='normal'
											name='fechaNacimiento'
											required
											type='date'
											onChange={handleInputChange}
										/>
									</Box>

									<Box
										component='form'
										noValidate
										sx={{ mt: 1, mx: 2 }}
									>
										<TextField
											fullWidth
											id='paterno'
											label='Apellido Paterno'
											margin='normal'
											name='apellidoPaterno'
											required
											type='text'
											onChange={handleInputChange}
										/>
										<TextField
											fullWidth
											id='email'
											label='Email'
											margin='normal'
											name='email'
											required
											type='text'
											onChange={handleInputChange}
										/>
										<TextField
											autoComplete='current-password'
											fullWidth
											id='password'
											label='Contraseña'
											margin='normal'
											name='password'
											required
											type='password'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											id='universidad'
											label='Universidad'
											margin='normal'
											name='universidad'
											required
											type='number'
											onChange={handleInputChange}
										/>
									</Box>
								</div>

								<Box component='form' noValidate sx={{ mt: 1 }}>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 5, mb: 2, backgroundColor: '#556169' }}
										size='large'
										onClick={handleSubmit}
									>
										Guardar
									</Button>
								</Box>
							</Box>
						</div>
					</Grid>
				</Grid>
			</MainLayout>
		</>
	);
};

const styles = {
	image: {
		backgroundImage: `url(${adminImg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	box: {
		my: 8,
		mx: 4,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
};
