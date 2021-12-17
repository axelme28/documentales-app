import React, { useEffect, useState } from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import { Alert, Col, Container, Row } from 'reactstrap';
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from 'react-simple-captcha';

import LoginImage from '../assets/imgs/headphones-g67bdc9328_1920.jpg';
import { ADMINISTRADOR_DOCUMENTALES_VIEW } from '../constants/routes.constants';
import { _getUserInfo, _iniciarSecion } from '../api/index.api';

const initialStateLogin = {
	email: '',
	password: '',
};

const initialStateError = {
	status: false,
	msg: '',
};

export const LoginScreen = ({ history }) => {
	const [login, setLogin] = useState(initialStateLogin);
	const [error, setError] = useState(initialStateError);
	const [captcha, setCaptcha] = useState('');

	useEffect(() => loadCaptchaEnginge(6), []);

	const handleChange = e => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	const handleChangeCaptcha = e => {
		const { value } = e.target;
		setCaptcha(value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setError({
			...error,
			status: false,
		});

		try {
			if (login.email === '' || login.password === '') {
				setError({
					status: true,
					msg: 'Debes ingresar correo y contraseña, intenta de nuevo.',
				});
				return;
			}

			if (!validateCaptcha(captcha)) {
				setError({
					status: true,
					msg: 'El captcha capturado no es correcto, intenta de nuevo.',
				});
				return;
			}

			const response = await _iniciarSecion(login);
			if (response.msg === 'login success') {
				if (response.result[0].Rolcol === 'administrador') {
					const result = getUserInfo('administrador', response.result[0].id);
					result && history.push(ADMINISTRADOR_DOCUMENTALES_VIEW);
				}
				if (response.result[0].Rolcol === 'alumno') {
					const result = getUserInfo('alumno', response.result[0].id);
					result && history.replace('/videos');
				}
				if (response.result[0].Rolcol === 'profesor') {
					const result = getUserInfo('profesor', response.result[0].id);
					result && history.replace('/videos');
				}
			} else {
				setError({
					status: true,
					msg: 'El usuario ó contraseña es incorrecto, intenta de nuevo.',
				});
				return;
			}
		} catch (error) {
			console.error(error);
		}
	};

	const getUserInfo = async (typeUser, idUsuario) => {
		try {
			const data = {
				typeUser,
				idUsuario,
			};
			const response = await _getUserInfo(data);
			localStorage.setItem('userInfo', JSON.stringify(response));
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	};

	return (
		<Grid container component='main' sx={{ height: '100vh' }}>
			<Grid item xs={false} sm={4} md={7} sx={styles.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div style={{ marginTop: 250 }}>
					<Box sx={styles.box}>
						<Typography component='h1' variant='h5'>
							Inicio de Sesión
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								autoComplete='email'
								autoFocus
								fullWidth
								id='email'
								label='Correo Eléctronico'
								margin='normal'
								name='email'
								required
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
							<Container className='mt-3'>
								<Row className='px-5 d-flex justify-content-center'>
									<Col
										sm='auto'
										md='12'
										className='d-flex justify-content-center'
									>
										<div className='d-flex flex-column justify-content-center align-item-center'>
											<TextField
												label='Ingresa el captcha'
												name='captcha'
												onChange={handleChangeCaptcha}
												required
												size='small'
												type='text'
												variant='filled'
											/>
											<div className='mx-4 mt-2'>
												<LoadCanvasTemplate />
											</div>
										</div>
									</Col>
								</Row>
							</Container>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 2, mb: 2, backgroundColor: '#28a745' }}
								color='success'
								onClick={handleSubmit}
							>
								Continuar
							</Button>
						</Box>
					</Box>
				</div>

				{error.status && (
					<Container>
						<Row className='px-5'>
							<Col sm='auto' md='12'>
								<Alert color='danger' className='text-center'>
									{error.msg}
								</Alert>
							</Col>
						</Row>
					</Container>
				)}
			</Grid>
		</Grid>
	);
};

const styles = {
	image: {
		backgroundImage: `url(${LoginImage})`,
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
