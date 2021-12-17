import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { _joinTeam } from '../api/index.api';
import { Sidebar } from '../components/Sidebar';
import { useCurrentTeam } from '../hooks/useCurrentTeam';
import useForm from '../hooks/useForm';

export const JoinTeamScreen = () => {
	const [values, , handleInputChange] = useForm({});
	const { CurrentTeam, setCurrentTeam } = useCurrentTeam();
	const [usuario, setUsuario] = useState({});

	useEffect(() => {
		const { idUsu } = JSON.parse(localStorage.getItem('userInfo'));
		if (idUsu) {
			setUsuario(idUsu);
		}
	}, []);

	console.log(usuario);
	const handleJoinTeam = async () => {
		const { codigo } = values;
		const data = {
			idUsu: usuario,
			codigo,
		};
		try {
			const response = await _joinTeam(data);
			if (response.ok) {
				console.log('todo bien');
			}
		} catch (e) {
			console.log(e);
		}
	};
	console.log(values);

	return (
		<div className='app'>
			<Sidebar setCurrentTeam={setCurrentTeam} />
			<main className='appMain' style={{ position: 'relative' }}>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Unirse a un Equipo</h4>
				</div>
				<Form className='p-5'>
					<FormGroup>
						<Label>Codigo del equipo</Label>
						<Input
							name='codigo'
							placeholder='nombre del equipo'
							type='text'
							style={{ width: '25%' }}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<Button color='success' onClick={handleJoinTeam}>
						Unirse
					</Button>
				</Form>
			</main>
		</div>
	);
};
