import React from 'react';
import { Button, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import useForm from '../hooks/useForm';
import { compararFechas } from '../helpers/date.helper';
import { Title } from '../components/index';
import { _postRegistrarDocumental } from '../api/index.api';
import Swal from 'sweetalert2';
import MainLayout from '../layout/MainLayout';

//prettier-ignore
const inputs = [
    { type: 'text', classInput: 'formulario__input', label: 'Nombre', classLabel: 'formulario__label fijar'},
    { type: 'text', classInput: 'formulario__input', label: 'Director', classLabel: 'formulario__label fijar'},
    { type: 'text', classInput: 'formulario__input', label: 'Productor', classLabel: 'formulario__label fijar'},
    { type: 'text', classInput: 'formulario__input', label: 'Elenco', classLabel: 'formulario__label fijar'},
    { type: 'text', classInput: 'formulario__input', label: 'Trama', classLabel: 'formulario__label fijar'},
    { type: 'text', classInput: 'formulario__input', label: 'Escritor', classLabel: 'formulario__label fijar'},
    { type: 'number', classInput: 'formulario__input', label: 'Duracion', classLabel: 'formulario__label fijar'},
	{ type: 'text', classInput: 'formulario__input', label: 'URL',classLabel: 'formulario__label fijar' },
]

const optionsClasificacion = ['A', 'AA', 'B15', 'C', 'D'];

const optionsCategorias = [
	'Belicos',
	'Biograficos',
	'Crimenes',
	'Deportes',
	'Historicos',
	'Música y Conciertos',
	'Politica',
	'Viajes y Aventuras',
];

const optionsIdioma = ['Español', 'Ingles', 'Portugues'];

const optionsPais = ['Mexico', 'USA'];

const initialState = {
	Categoria: '',
	Clasificacion: '',
	Director: '',
	Duracion: '',
	Elenco: '',
	Escritor: '',
	Fecha_Lanzamiento: '',
	Idioma: '',
	Pais_origen: '',
	Productor: '',
	Trama: '',
	Nombre: '',
	URL: '',
};

export const RegistrarScreen = () => {
	const [values, setValues, handleInputChange] = useForm(initialState);

	const handleContinue = async () => {
		if (compararFechas(values.FechaLanzamiento)) {
			alert('Fecha invalida');
			return;
		}

		try {
			const data = await _postRegistrarDocumental(values);
			if (data.msg) {
				Swal.fire('!Documental Registrado!', values.Nombre, 'success');
				// reset();
				setValues(initialState);
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Hubo un error',
					text: 'No se pudo registrar el proyecto, intenta más tarde',
				});
			}
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'No se pudo registrar el proyecto, intenta más tarde',
			});
		}
	};

	return (
		<>
			<MainLayout>
				<form className='formulario mb-3 pb-3'>
					<Title title='Registrar Documental' className='formulario__titulo' />
					<div>
						<div>
							<div className='d-flex flex-wrap justify-content-between'>
								{inputs.map(input => (
									<FormGroup
										className='m-2'
										style={{ width: 210 }}
										key={input.label}
									>
										<Label>{input.label}</Label>
										<Input
											name={input.label}
											onChange={handleInputChange}
											type={input.type}
											value={values[input.label]}
										/>
									</FormGroup>
								))}
							</div>
							<FormGroup style={{ width: 210 }}>
								<Label>Fecha de Lanzamiento</Label>
								<Input
									name={'Fecha_Lanzamiento'}
									onChange={handleInputChange}
									type={'date'}
									value={values.Fecha_Lanzamiento}
								/>
							</FormGroup>
						</div>
						<div>
							<div className='d-flex justify-content-between mt-3'>
								<FormGroup style={{ width: 210 }} className='mx-1'>
									<Label>Clasificación</Label>
									<Input
										type='select'
										name='Clasificacion'
										onChange={handleInputChange}
									>
										<option selected disabled>
											Selecciona una opción
										</option>

										{optionsClasificacion.map(clasificacion => (
											<option key={clasificacion}>
												{clasificacion}
											</option>
										))}
									</Input>
								</FormGroup>
								<FormGroup style={{ width: 210 }} className='mx-1'>
									<Label>Categoría</Label>
									<Input
										type='select'
										name='Categoria'
										onChange={handleInputChange}
									>
										<option selected disabled>
											Selecciona una opción
										</option>
										{optionsCategorias.map(categoria => (
											<option key={categoria}>{categoria}</option>
										))}
									</Input>
								</FormGroup>
							</div>
							<div className='d-flex justify-content-between mt-3'>
								<FormGroup style={{ width: 210 }} className='mx-1'>
									<Label>Idioma</Label>
									<Input
										type='select'
										name='Idioma'
										onChange={handleInputChange}
									>
										<option selected disabled>
											Selecciona una opción
										</option>
										{optionsIdioma.map(idioma => (
											<option key={idioma}>{idioma}</option>
										))}
									</Input>
								</FormGroup>

								<FormGroup style={{ width: 210 }} className='mx-1'>
									<Label>País de Origen</Label>
									<Input
										type='select'
										name='Pais_origen'
										onChange={handleInputChange}
									>
										<option selected disabled>
											Selecciona una opción
										</option>
										{optionsPais.map(pais => (
											<option key={pais}>{pais}</option>
										))}
									</Input>
								</FormGroup>
							</div>
						</div>
					</div>
				</form>

				<Container className='mb-2 pb-2'>
					<Row className='d-flex justify-content-center'>
						<Button color='success' size='lg' onClick={handleContinue}>
							Registrar Documental
						</Button>
					</Row>
				</Container>
			</MainLayout>
		</>
	);
};
