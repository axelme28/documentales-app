import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/profesor.png';
import MainLayout from '../layout/MainLayout';
import { _altaUsuario } from '../api/index.api';


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

}


export const RegistroProfescreen = () => {
	const [values, , handleInputChange] = useForm(initialState);


	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const {
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
				nombre,
				apellidoMaterno,
				noTrabajador,
				fechaNacimiento,
				apellidoPaterno,
				email,
				password,
				idRol,
				idUniversidad,
			}

			await _altaUsuario(data);
		} catch (error) {
			console.log(error)
			
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
										onSubmit={() => {}}
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
											name='materno'
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
										onSubmit={() => {}}
										sx={{ mt: 1, mx: 2 }}
									>
										<TextField
											fullWidth
											id='paterno'
											label='Apellido Paterno'
											margin='normal'
											name='paterno'
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
											type='text'
											onChange={handleInputChange}
										/>
									</Box>
								</div>

								<Box
									component='form'
									noValidate
									onSubmit={() => {}}
									sx={{ mt: 1 }}
								>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 5, mb: 2, backgroundColor: '#556169' }}
										size='large'
										onClick={() => {}}
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
