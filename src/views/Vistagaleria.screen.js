import React, { useEffect, useState } from 'react';
import {_verDocumentales} from '../api/index.api';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Container,
} from 'reactstrap';
import triangulo from '../assets/imgs/caret-right (1).png';

export const Vistagaleriascreen = () => {
	const [documentales, setDocumentales] = useState([])
	useEffect(() => {
		getDocumentales();
	}, [])

	const getDocumentales = async () => { 
		try {
			const response = await _verDocumentales();
			setDocumentales(response);
		} catch (error) {
			console.log(error)
		}
	}


	console.log(documentales)



	return (
		<>
			<section className='fondochingon d-flex justify-content-center align-items-center'>
				<Container className=' d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-wrap'>
					{
					documentales.map(({Nombre,categoria,Trama}) => {
						return (
							
							<Card style={{ maxWidth: 500 , margin: 10}}
								className='cartaGrande'
							>
								<CardBody>
									<CardTitle tag='h5'>{Nombre}</CardTitle>
									<CardSubtitle className='mb-2 text-muted' tag='h6'>
										{categoria}
									</CardSubtitle>
									<CardText>
										{Trama}
									</CardText>
									<Button
										style={{
											backgroundColor: '#525C90',
											borderRadius: 15,
											width: 160,
										}}
									>
										<img
											src={triangulo}
											alt='icono'
											style={{
												width: 20,
												height: 20,
												marginRight: 10,
											}}
										/>
										Reproducir
									</Button>
								</CardBody>
							</Card>
							
						);
					})
						}
					</div>
				</Container>
			</section>
		</>
	);
};
