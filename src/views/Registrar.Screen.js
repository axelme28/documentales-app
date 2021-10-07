import React from 'react';
import { Button, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import useForm from '../hooks/useForm';
import { compararFechas } from '../helpers/date.helper';
import { Title, Input as Input2, Label as Label2 } from '../components/index';
import { _postRegistrarDocumental } from '../api/index.api';
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
	const [values, handleInputChange, reset] = useForm(initialState);

	const handleContinue = async () => {
		console.log(values);
		if (compararFechas(values.FechaLanzamiento)) {
			alert('Fecha invalida');
			return;
		}

		try {
			const data = await _postRegistrarDocumental(values);
			if (data.msg) {
				alert('Se ha creado con éxito el documental en la base de datos');
				reset();
				document.getElementsByTagName('form').forEach().reset();
				//TODO: redireccionar a la vista de ver documentales
			} else {
				alert('Ha ocurrido un error al crear el documental, intenta de nuevo');
			}
		} catch (error) {
			console.error(error);
			alert('Ha ocurrido un error, intenta mas tarde');
		}
	};

	return (
		<MainLayout>
			<form className='formulario mb-5 pb-5'>
				<Title
					title='REGISTRO de DOCUMENTALES'
					className='formulario__titulo pb-5'
				/>

				<div className='d-flex flex-wrap justify-content-between'>
					{inputs.map(input => (
						<FormGroup className='m-2'>
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
				<div className='d-flex justify-content-between mt-3'>
					<FormGroup style={{ width: 200 }}>
						<Label>Fecha de Lanzamiento</Label>
						<Input
							name={'Fecha_Lanzamiento'}
							onChange={handleInputChange}
							type={'date'}
							value={values.Fecha_Lanzamiento}
						/>
					</FormGroup>

					<FormGroup style={{ width: 200 }}>
						<Label>Clasificación</Label>
						<Input
							type='select'
							name='Clasificacion'
							onChange={handleInputChange}
						>
							<option selected disabled>
								Selecciona una clasificación
							</option>
							<option>A</option>
							{optionsClasificacion.map(clasificacion => (
								<option key={clasificacion}>{clasificacion}</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup style={{ width: 200 }}>
						<Label>Categoría</Label>
						<Input
							type='select'
							name='Categoria'
							onChange={handleInputChange}
						>
							<option selected disabled>
								Selecciona una categoría
							</option>
							{optionsCategorias.map(categoria => (
								<option key={categoria}>{categoria}</option>
							))}
						</Input>
					</FormGroup>
				</div>
				<div className='d-flex justify-content-between mt-3'>
					<FormGroup style={{ width: 200 }}>
						<Label>Idioma</Label>
						<Input type='select' name='Idioma' onChange={handleInputChange}>
							<option selected disabled>
								Selecciona una categoría
							</option>
							{optionsIdioma.map(idioma => (
								<option key={idioma}>{idioma}</option>
							))}
						</Input>
					</FormGroup>

					<FormGroup style={{ width: 200 }}>
						<Label>País de Origen</Label>
						<Input
							type='select'
							name='Pais_origen'
							onChange={handleInputChange}
						>
							<option selected disabled>
								Selecciona una categoría
							</option>
							{optionsPais.map(pais => (
								<option key={pais}>{pais}</option>
							))}
						</Input>
					</FormGroup>
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
	);
};
