import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';
import { _getAllTaskByUser } from '../api/index.api';
import { objArray } from '../helpers/functions.helper';

export const AllTasksScreen = () => {
	const history = useHistory();

	const [allTask, setAllTask] = useState([]);

	useEffect(() => {
		const { idUsu } = JSON.parse(localStorage.getItem('userInfo'));
		handleGetAllTaskByUser(idUsu);
	}, []);

	const handleGetAllTaskByUser = async idUsu => {
		try {
			const res = await _getAllTaskByUser({ idUsu });
			setAllTask(objArray(res[0]));
		} catch (error) {
			console.error(error);
		}
	};

	const handleNewTask = () => {
		history.push('/nueva-tarea');
	};

	const RecordTaskScreen = (
		<Button
			color='secondary'
			size='small'
			onClick={() => {
				history.push('/calificar-tarea');
			}}
		>
			Calificar tarea
		</Button>
	);

	return (
		<div className='app'>
			<Sidebar />
			<main
				className='appMain'
				style={{ position: 'relative', backgroundColor: '#F0F1F7' }}
			>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Tareas Asignadas</h4>
				</div>
				<div className='d-flex justify-content-apace-between mt-3 '>
					<h5
						style={{
							color: '#555d8b',
							marginRight: '800px',
							marginLeft: '48px',
						}}
					>
						Asignadas
					</h5>

					<button
						className='btn '
						style={{ backgroundColor: '#555d8b', color: 'white' }}
						onClick={handleNewTask}
					>
						Nueva tarea
					</button>
				</div>
				<div className='d-flex justify-content-center'>
					<Stack spacing={2} sx={{ maxWidth: 600 }} className='mt-4'>
						{allTask.length > 0 &&
							allTask.map(({ nombre }, i) => (
								<SnackbarContent
									key={i}
									message={nombre}
									action={RecordTaskScreen}
									style={styles.asignacion}
								/>
							))}
					</Stack>
				</div>
			</main>
		</div>
	);
};

const styles = {
	asignacion: {
		backgroundColor: 'white',
		color: 'black',
	},
};
