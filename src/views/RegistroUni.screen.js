import React from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import useForm from '../hooks/useForm';
import adminImg from '../assets/imgs/universidad.png';
import { _altaUniversidad } from '../api/index.api';

const initialState = {
	  nombre: '',
	  codigo: 0,
};


export const RegistroUniscreen = () => {




	const [ values, setValues, handleInputChange, reset ] = useForm(initialState);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
		const { nombre, codigo } = values;
		const data = {
			nombre,
			codigo,
		};
		const response = await _altaUniversidad(data);
		console.log(response);
		reset();
		}catch(error){
			console.log(error);
		}
	};
	return (
		<>
			<Grid container component='main' sx={{ height: '100vh' }}>
				<Grid item xs={false} sm={4} md={6} sx={styles.image} />
				<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
										fullWidth
										id='codigo'
										label='Codigo'
										margin='normal'
										name='codigo'
										required
										type='text'
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
									sx={{ mt: 5, mb: 2, backgroundColor: '#556169' }}
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
