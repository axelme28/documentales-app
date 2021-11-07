import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/alumno.png';

export const RegistroAlum = () => {
	const { values, handleChange } = useForm('');
	return (
		<>
			<Grid container component='main' sx={{ height: '100vh' }}>
				<Grid item xs={false} sm={4} md={6} sx={styles.image} />
				<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
					<div style={{ marginTop: 50 }}>
						<Box sx={styles.box}>
							<Typography component='h1' variant='h5'>
								Registrar Alumno
							</Typography>
							<div className='d-flex justify-content-between'>
								<Box
									component='form'
									noValidate
									onSubmit={() => {}}
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
										onChange={handleChange}
									/>

					

									<TextField
										fullWidth
										id='materno'
										label='Apellido Materno'
										margin='normal'
										name='materno'
										required
										type='text'
										onChange={handleChange}
									/>
                                    
                                    <TextField
										fullWidth
										id='email'
										label='Email'
										margin='normal'
										name='email'
										required
										type='text'
										onChange={handleChange}
									/>

									<TextField
										fullWidth
										id='direccion'
										label='Direccion'
										margin='normal'
										name='direccion'
										required
										type='text'
										onChange={handleChange}
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
										onChange={handleChange}
									/>

									<TextField
										fullWidth
										id='boleta'
										label='Boleta '
										margin='normal'
										name='boleta'
										required
										type='text'
										onChange={handleChange}
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
										onChange={handleChange}
									/>

									<TextField
										fullWidth
										id='universidad'
										label='Universidad'
										margin='normal'
										name='universidad'
										required
										type='text'
										onChange={handleChange}
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
