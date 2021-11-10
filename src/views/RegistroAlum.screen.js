import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/alumno.png';
import { _altaUsuario } from '../api/index.api';
import MainLayout from '../layout/MainLayout';

const initialState = {
	typeUser: 'alumno',
	nombre: '',
	apellidoPaterno: '',
	apellidoMaterno: '',
	boleta: '',
	email: '',
	password: '',
	idRol: 'alumno',
	idUniversidad: 1,
};

export const RegistroAlum = () => {
	const [values, , handleInputChange] = useForm(initialState);

	console.log(values);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const {
				typeUser,
				nombre,
				apellidoPaterno,
				apellidoMaterno,
				boleta,
				email,
				password,
				idRol,
				idUniversidad,
			} = values;
			console.log(idRol);

			const data = {
				typeUser,
				nombre,
				apellidoPaterno,
				apellidoMaterno,
				boleta,
				email,
				password,
				idRol,
				idUniversidad,
			};
			console.log(data);
			// const request =
			await _altaUsuario(data);
			// console.log(request);
		} catch (error) {
			console.log(error);
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
									Registrar Alumno
								</Typography>
								<div className='d-flex justify-content-between'>
									<Box
										component='form'
										noValidate
										sx={{ mt: 1, mx: 2 }}
									>
										<TextField
											autoFocus
											fullWidth
											id='nombre'
											label='Nombre'
											margin='normal'
											name='nombre'
											required
											type='text'
											onChange={e => handleInputChange(e)}
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
											id='email'
											label='Email'
											margin='normal'
											name='email'
											required
											type='text'
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
											id='boleta'
											label='Boleta '
											margin='normal'
											name='boleta'
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
											name='idUniversidad'
											required
											type='number'
											onChange={handleInputChange}
										/>
									</Box>
								</div>

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
