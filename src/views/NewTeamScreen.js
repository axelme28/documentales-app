import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Input,
} from 'reactstrap';
import { Sidebar } from '../components/Sidebar';
import { _postRegistrarTeam } from '../api/index.api';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2';

const initialState = {
	nombre: '',
	codigo: '',
	idUsuario: '',
};

export const NewTeamScreen = () => {
	const [values, , handleInputChange, reset] = useForm(initialState);

	const handleCreateTeam = async () => {
		try {
			const { nombre, codigo, idUsuario } = values;
			const data = {
				nombre,
				codigo,
				idUsuario: 9,
			};
			const response = await _postRegistrarTeam(data);
			console.log(response);
			if (response.ok) {
				Swal.fire(response.message);
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			}
		} catch (e) {
			console.log(e);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
			});
		}
	};
	console.log(values);
	return (
		<>
			<div className='app '>
				<Sidebar />
				<main className='appMain' style={{ position: 'relative' }}>
					<div
						className='d-flex justify-content-center'
						style={{ backgroundColor: '#515d8a', height: 38 }}
					>
						<h2 style={{ color: 'white' }}>Crear Nuevo Equipo</h2>
					</div>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							borderColor: '#515D8A',
						}}
					>
						<Card outline style={{ borderColor: '#515D8A' }}>
							<CardBody>
								<CardSubtitle className='mb-2 text-muted' tag='h6'>
									Ingrese el nombre del equipo
								</CardSubtitle>
								<Input
									bsSize='sm'
									name='nombre'
									onChange={handleInputChange}
								/>
								<CardSubtitle className='mb-2 mt-2 text-muted' tag='h6'>
									Codigo del equipo
								</CardSubtitle>
								<Input
									bsSize='sm'
									name='codigo'
									onChange={handleInputChange}
								/>
								<Button
									className='my-2'
									color='primary'
									onClick={handleCreateTeam}
								>
									Crear
								</Button>
							</CardBody>
						</Card>
					</div>
				</main>
			</div>
		</>
	);
};
