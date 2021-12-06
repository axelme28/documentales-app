import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { _createTask } from '../api/index.api';
import { Sidebar } from '../components/Sidebar';
import useForm from '../hooks/useForm';

export const NewTaskScreen = () => {
	const [currentTeam, setCurrentTeam] = useState([]);
	const [values, setValues, handleInputChange, reset] = useForm({});

	const handleNewTask = async e => {
		e.preventDefault();
		const { nombre, instrucciones, tipoTarea } = values;
		const newTask = {
			nombre,
			instrucciones,
			idEquipo: 16,
			tipoTarea,
			fechaVencimiento: '2020-05-05',
		};
		try {
			const response = await _createTask(newTask);
			console.log(response);
			reset();
		} catch (error) {
			console.log(error);
		}
	};

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
							name='nombre'
							placeholder='Titulo de la tarea  '
							type='email'
							style={styles.input}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleText'>Instrucciones</Label>
						<Input
							name='instrucciones'
							type='textarea'
							onChange={handleInputChange}
						/>
					</FormGroup>

					<FormGroup>
						<Label for='exampleDate'>Fecha de entrega</Label>
						<Input
							name='date'
							placeholder='fecha'
							type='date'
							onChange={() => {}}
						/>
					</FormGroup>

					<FormGroup>
						<Label for='exampleSelect'>Tipo de tarea </Label>
						<Input
							id='exampleSelect'
							name='select'
							type='select'
							onChange={handleInputChange}
						>
							<option>Resumen</option>
							<option>Informe</option>
							<option>Cuestionario</option>
							<option>Critica</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for='exampleSelect'>Equipo </Label>
						<Input
							id='exampleSelect'
							name='idEquipo'
							type='select'
							onChange={handleInputChange}
							value={currentTeam.id}
						>
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
							onClick={handleNewTask}
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
