import React, { useEffect } from 'react';
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
import { _getTeams, _postRegistrarTeam } from '../api/index.api';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2';
import { useCurrentTeam } from '../hooks/useCurrentTeam';

const initialState = {
	nombre: '',
	codigo: '',
	idUsuario: 0,
};

export const NewTeamScreen = () => {
	const [values, , handleInputChange, reset] = useForm(initialState);
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
	const { idUsu } = userInfo;
	const { setCurrentTeam } = useCurrentTeam();

	//TODO: autogenerar el codigo del equipo
	const handleCreateTeam = async () => {
		try {
			const { nombre, codigo, idUsuario } = values;
			const data = {
				nombre,
				codigo,
				idUsuario: idUsu,
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
	return (
		<>
			<div className='app '>
				<Sidebar setCurrentTeam={setCurrentTeam} />
				<main className='appMain' style={{ position: 'relative' }}>
					<div
						className='d-flex justify-content-center'
						style={{ backgroundColor: '#515d8a', height: 29 }}
					>
						<h4 style={{ color: 'white' }}>Crear Nuevo Equipo</h4>
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
