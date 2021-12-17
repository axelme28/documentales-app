import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';
import { _createTask } from '../api/index.api';
import { Sidebar } from '../components/Sidebar';
import useForm from '../hooks/useForm';

export const NewTaskScreen = () => {
	const [currentTeam, setCurrentTeam] = useState([]);
	const [values, , handleInputChange, reset] = useForm({});
	const [idteam, setidteam] = useState(0);

	useEffect(() => {
		if (currentTeam.length === 0) {
			const localStorageTeams = JSON.parse(localStorage.getItem('teams'));
			setCurrentTeam(localStorageTeams);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleNewTask = async e => {
		e.preventDefault();
		const { nombre, instrucciones, equipo, tipoTarea, fechaVencimiento } = values;
		const newTask = {
			nombre,
			instrucciones,
			equipo,
			tipoTarea,
			fechaVencimiento,
		};
		try {
			const response = await _createTask(newTask);
			if (response.ok) {
				Swal.fire(response.message);
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} else {
				Swal.fire(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
	console.log(values);
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
							type='text'
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
							name='fechaVencimiento'
							placeholder='fechaVencimiento'
							type='date'
							onChange={handleInputChange}
						/>
					</FormGroup>

					<FormGroup>
						<Label for='exampleSelect'>Tipo de tarea </Label>
						<Input
							name='tipoTarea'
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
						<Input name='equipo' type='select' onChange={handleInputChange}>
							{currentTeam.length > 0 &&
								currentTeam.map(team => <option>{team.nombre}</option>)}
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
