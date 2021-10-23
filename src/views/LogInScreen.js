import React, { useEffect, useState } from 'react';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import { Alert, Col, Container, Row } from 'reactstrap';
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	LoadCanvasTemplateNoReload,
	validateCaptcha,
} from 'react-simple-captcha';

import LoginImage from '../assets/imgs/headphones-g67bdc9328_1920.jpg';
import { DOCUMENTALES_VIEW } from '../constants/routes.constants';
import { _iniciarSecion } from '../api/index.api';

const initialStateLogin = {
	email: '',
	password: '',
};

const initialStateError = {
	status: false,
	msg: '',
};

export const LoginScreen =  ({ history }) => {
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

            const data = await _iniciarSecion(login);
			// const validate = handleValidateLogin(data, login);

			// if (validate) {
				history.push(DOCUMENTALES_VIEW);
			// 	return;
			// }
		} catch (error) {
			console.error(error);
		}
	};

	const handleValidateLogin = (User = {}, login = {}) => {
		 const { email, password } = User;

		if (login.email !== email) {
			setError({
				status: true,
				msg: 'El correo ingresado no existe',
			});
			return false;
		}
		if (login.email === email && login.password !== password) {
			setError({
				status: true,
				msg: 'La contraseña ingresada es incorrecta, intenta de nuevo',
			});
			return false;
		}

		return true;
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
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								onClick={handleSubmit}
							>
								Continuar
							</Button>
							{/* <Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										¿Olvidaste tu contraseña?
									</Link>
								</Grid>
							</Grid> */}
						</Box>
					</Box>
				</div>
				<Container>
					<Row className='px-5 d-flex justify-content-center'>
						<Col sm='auto' md='12' className='d-flex justify-content-center'>
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
