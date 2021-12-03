import React, { useEffect, useState } from 'react';
//prettier ignore
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
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
	const [Code, setCode] = useState('');

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
					<Form className='p-5'>
						<FormGroup>
							<Label>Email</Label>
							<Input
								name='name'
								placeholder='with a placeholder'
								type='text'
								style={{ width: '25%' }}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Password</Label>
							<Input
								value=''
								type='number'
								style={{ width: '25%' }}
								disabled
							/>
						</FormGroup>
						<Button color='success' onClick={handleCreateTeam}>
							Crear
						</Button>
					</Form>
				</main>
			</div>
		</>
	);
};
