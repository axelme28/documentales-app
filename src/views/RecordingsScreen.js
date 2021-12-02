import React from 'react';
import { Col, Container, Input, Row } from 'reactstrap';
import { Sidebar } from '../components/Sidebar';

export const RecordingsScreen = () => {
	return (
		<div className='app'>
			<Sidebar />
			<main className='appMain' style={{ position: 'relative' }}>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Calificaciones de Tareas</h4>
				</div>
				<Container className='mt-5 pt-2'>
					<Row className='mb-4'>
						<Col md={6} className='d-flex justify-content-end '>
							<h6>Nombre del Alumno</h6>
						</Col>
						<Col md={6} className='d-flex justify-content-start'>
							<h6> Calificaion </h6>
						</Col>
					</Row>
					<Row className=''>
						<Col
							md={6}
							className='d-flex justify-content-end align-items-center'
						>
							<p className='m-0'>Nombre del Alumno</p>
						</Col>
						<Col
							md={6}
							className='d-flex justify-content-start align-items-center'
						>
							<Input style={{ width: '60px' }} />
						</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
};
