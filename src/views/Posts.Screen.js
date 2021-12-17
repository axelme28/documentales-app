import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { _getPosts, _sendPublication } from '../api/index.api';
import { Sidebar } from '../components/Sidebar';
import useForm from '../hooks/useForm';
//post [{titulo,mensaje},]
import icon from '../assets/icons/paper-plane (1).png';
import { useCurrentTeam } from '../hooks/useCurrentTeam';

//TODO: ponerle logica para que obtenga el id del usuario asi como el nombre del equipo e id del equipo

const initialState = {
	titulo_publicacion: '',
	texto_publicacion: '',
	date: '2001-02-02',
};
export const PostsScreen = () => {
	const [Post, setpost] = useState([]);
	const [values, , handleInputChange, reset] = useForm(initialState);
	const { CurrentTeam, setCurrentTeam } = useCurrentTeam();
	const [usuario, setUsuario] = useState({});

	const [isLoading, setIsLoading] = useState(false);

	const { nombre, codigo } = CurrentTeam;

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		if (userInfo) {
			setUsuario(userInfo);
			console.log('si hay usuario');
		}
	}, []);

	useEffect(() => {
		getPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentTeam]);

	// useEffect(() => {
	// 	handleSendPublicacion();
	// }, [dataSentPost]);

	console.log(values);

	const getPost = async () => {
		try {
			setIsLoading(true);
			const params = {
				id_equipo: CurrentTeam.id,
				id_usuario: usuario.idUsu,
			};
			const response = await _getPosts(params);
			const response2 = objArray(response);
			setpost(response2);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSendPublicacion = async e => {
		e.preventDefault();
		try {
			const { titulo_publicacion, texto_publicacion, date } = values;

			const params = {
				titulo_publicacion,
				texto_publicacion,
				id_equipo: CurrentTeam.id,
				id_usuario: usuario.idUsu,
				date: date,
			};

			if (titulo_publicacion === '' || texto_publicacion === '') {
				Swal.fire({
					title: 'Error',
					text: 'Todos los campos son obligatorios',
					icon: 'error',
					confirmButtonText: 'Ok',
				});
			} else {
				const response = await _sendPublication(params);
				if (response.ok === true) {
					Swal.fire({
						title: 'Exito',
						text: 'Publicacion enviada',
						icon: 'success',
						confirmButtonText: 'Ok',
					});
					reset();
					getPost();
				}
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
			});
		}
	};

	const objArray = (obj = {}) => {
		let arr = [];

		for (let key in obj) {
			arr.push(obj[key]);
		}

		return arr;
	};

	return (
		<>
			<div className='app'>
				<Sidebar setCurrentTeam={setCurrentTeam} key={CurrentTeam} />

				<main className='appMain container'>
					<div
						className='d-flex justify-content-center'
						style={{ backgroundColor: '#515D8A', color: 'white', height: 29 }}
					>
						<h4>Publicaciones</h4>
					</div>

					<div className='d-flex justify-content-end mt-2'>
						<h5>Codigo del equipo: {codigo}</h5>
					</div>

					<div
						className='d-flex justify-content-center m-3'
						style={{ color: 'black', height: 38 }}
					>
						<h2>{nombre}</h2>
					</div>

					<div className=''>
						<div
							style={{
								height: '26rem',
								backgroundColor: '#D9E1FF',
								borderRadius: '10',
							}}
							className='posts m-3 py-4 shadow  '
						>
							{
								//prettier-ignore
								(isLoading===false && Post.length > 0) &&
								Post.map(({ titulo, texto }) => (
									<div
										style={{
											marginTop: '0rem',
											marginRight: '2rem',
											marginLeft: '2rem',
											width: '20rem',
											display: 'block',
										}}
										className='message'
									>
										<div
											className='card border-primary mb-3'
											style={{ maxWidth: '18rem' }}
										>
											<div className='card-body'>
												<h5 className='card-title'>{titulo}</h5>
												<p className='card-text'>{texto}</p>
											</div>
										</div>
									</div>
								))
							}
						</div>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ marginTop: '5rem' }}
							data-spy='scroll'
						>
							<form className='form d-fex'>
								<div className='mb-3'>
									<input
										type='text'
										className='form-control'
										id='formGroupExampleInput'
										name='titulo_publicacion'
										placeholder='Titulo de la publicacion'
										style={{ width: '35rem' }}
										onChange={handleInputChange}
									/>
								</div>
								<div className='mb-3'>
									<textarea
										className='form-control'
										placeholder='Mesage de la publicacion'
										id='floatingTextarea'
										name='texto_publicacion'
										style={{ width: '35rem' }}
										onChange={handleInputChange}
									/>
								</div>
							</form>

							<button
								type='submit'
								className='btn mb-2 ml-4'
								style={{ border: '2px solid #515D8A' }}
								onClick={handleSendPublicacion}
							>
								<img
									src={icon}
									style={{ width: 25, marginRight: '1rem' }}
									alt='icon'
								/>
								Enviar
							</button>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};
