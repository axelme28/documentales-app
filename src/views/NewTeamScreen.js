import React, { useEffect, useState } from 'react';
//prettier ignore
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Sidebar } from '../components/Sidebar';
import { _postRegistrarTeam } from '../api/index.api';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2';
import { useCurrentTeam } from '../hooks/useCurrentTeam';

const initialState = {
	nombre: '',
	codigo: '',
	idUsuario: 0,
};

const generateCode = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

export const NewTeamScreen = () => {
	const [values, , handleInputChange] = useForm(initialState);
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
	const { idUsu } = userInfo;
	const { setCurrentTeam } = useCurrentTeam();
	const [Code, setCode] = useState('');

	useEffect(() => {
		setCode(generateCode());
	}, []);

	const handleCreateTeam = async () => {
		try {
			const { nombre, codigo } = values;
			const data = {
				nombre,
				codigo: Code,
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
				<Sidebar setCurrentTeam={setCurrentTeam} key={idUsu} />
				<main className='appMain' style={{ position: 'relative' }}>
					<div
						className='d-flex justify-content-center'
						style={{ backgroundColor: '#515d8a', height: 29 }}
					>
						<h4 style={{ color: 'white' }}>Crear Nuevo Equipo</h4>
					</div>
					<Form className='p-5'>
						<FormGroup>
							<Label>Nombre</Label>
							<Input
								name='nombre'
								placeholder='nombre del equipo'
								type='text'
								style={{ width: '25%' }}
								onChange={handleInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Codigo</Label>
							<Input
								value={Code}
								style={{ width: '32%' }}
								disabled
								name='codigo'
								type='text'
								onChange={handleInputChange}
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
