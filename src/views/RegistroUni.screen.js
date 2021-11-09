import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';

import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/universidad.png';
import { _altaUniversidad } from '../api/index.api';
import MainLayout from '../layout/MainLayout';

const initialState = {
	nombre: '',
	convenio: '',
};

export const RegistroUniscreen = () => {
	const [values, , handleInputChange, reset] = useForm(initialState);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const { nombre, convenio } = values;
			const data = {
				nombre,
				convenio,
			};
			const response = await _altaUniversidad(data);

			if (response.ok) {
				Swal.fire('!Universidad Registrada!', response.result, 'success');
				reset();
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Hubo un error',
					text: response.message,
				});
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'No se pudo registrar la Universidad, intenta más tarde',
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
									Registro de Universidades
								</Typography>
								<div className='d-flex justify-content-between'>
									<Box
										component='form'
										noValidate
										sx={{ mt: 1, mx: 2 }}
									>
										<TextField
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
											// disabled
											fullWidth
											// id='outlined-disabled'
											label='Convenio Universidad'
											margin='normal'
											name='convenio'
											required
											type='text'
											// value={idUniversidad}
											onChange={handleInputChange}
										/>
									</Box>
								</div>

								<div className='d-flex justify-content-between'>
									<Box
										component='form'
										noValidate
										sx={{ mt: 1, mx: 2 }}
									>
										<Button
											type='submit'
											fullWidth
											variant='contained'
											sx={{
												mt: 5,
												mb: 2,
												backgroundColor: '#556169',
											}}
											size='large'
											onClick={handleSubmit}
										>
											Guardar
										</Button>
									</Box>
								</div>
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
