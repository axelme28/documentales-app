import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2';
import adminImg from '../assets/imgs/admin.png';
import { _altaUsuario } from '../api/index.api';
import MainLayout from '../layout/MainLayout';

const initialState = {
	typeUser: 'admin',
	nom_admi: '',
	apellido_paterno: '',
	apellido_materno: '',
	direccion: '',
	telefono: '',
	email: '',
	password: '',
	idRol: 'administrador',
	idUniversidad: 1,
};

export const RegistrarAdmiscreen = () => {
	const [values, , handleInputChange, reset] = useForm(initialState);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const {
				typeUser,
				nom_admi,
				apellido_paterno,
				apellido_materno,
				direccion,
				telefono,
				email,
				password,
				idRol,
				idUniversidad,
			} = values;

			const data = {
				typeUser,
				nom_admi,
				apellido_paterno,
				apellido_materno,
				direccion,
				telefono,
				email,
				password,
				idRol,
				idUniversidad,
			};

			const result = await _altaUsuario(data);

			if (result.msg === 'Administrador creado correctamente') {
				Swal.fire('!Admistrador Registrado!');
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

			reset();
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
									Registrar Administrador
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
											label='Nombre'
											margin='normal'
											name='nom_admi'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											label='Apellido Materno'
											margin='normal'
											name='apellido_materno'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											label='Email'
											margin='normal'
											name='email'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											label='Direccion'
											margin='normal'
											name='direccion'
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
											label='Apellido Paterno'
											margin='normal'
											name='apellido_paterno'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											label='Telefono '
											margin='normal'
											name='telefono'
											required
											type='text'
											onChange={handleInputChange}
										/>

										<TextField
											autoComplete='current-password'
											fullWidth
											label='Contraseña'
											margin='normal'
											name='password'
											required
											type='password'
											onChange={handleInputChange}
										/>

										<TextField
											fullWidth
											label='Universidad'
											margin='normal'
											name='universidad'
											required
											type='text'
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
