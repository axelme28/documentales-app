import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { Sidebar } from '../components/Sidebar';

export const NewTaskScreen = () => {
	const [currentTeam, setCurrentTeam] = useState([]);

	useEffect(() => {
		if (currentTeam.length === 0) {
			const localStorageTeams = JSON.parse(localStorage.getItem('teams'));
			setCurrentTeam(localStorageTeams);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='app'>
			<Sidebar />

			<main className='appMain' style={{ position: 'relative' }}>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Asignar Tarea</h4>
				</div>
				<Form style={{ padding: '60px' }}>
					<FormGroup>
						<Label for='exampleEmail'>Titulo</Label>
						<Input
							name='email'
							placeholder='Titulo de la tarea  '
							type='email'
							style={styles.input}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleText'>Instrucciones</Label>
						<Input id='exampleText' name='text' type='textarea' />
					</FormGroup>

					<FormGroup>
						<Label for='exampleDate'>Fecha de entrega</Label>
						<Input
							id='exampleDate'
							name='date'
							placeholder='fecha'
							type='date'
						/>
					</FormGroup>

					<FormGroup>
						<Label for='exampleSelect'>Tipo de tarea </Label>
						<Input id='exampleSelect' name='select' type='select'>
							<option>Resumen</option>
							<option>Informe</option>
							<option>Cuestionario</option>
							<option>Critica</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for='exampleSelect'>Equipo </Label>
						<Input id='exampleSelect' name='select' type='select'>
							{currentTeam.length > 0 &&
								currentTeam.map(({ nombre }) => (
									<option>{nombre}</option>
								))}
						</Input>
					</FormGroup>
					<div className='d-flex justify-content-end mt-4'>
						<Button
							color='btn'
							style={{ backgroundColor: '#515d8a', color: 'white' }}
							onClick={() => {}}
						>
							Asignar
						</Button>
					</div>
				</Form>
			</main>
		</div>
	);
};

const styles = {
	input: {
		width: '50% !important',
	},
};
