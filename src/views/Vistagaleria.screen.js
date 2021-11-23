import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Container,
	Modal,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import VideoContentYT from 'react-video-content-youtube';

import triangulo from '../assets/imgs/caret-right (1).png';
import { _verDocumentales } from '../api/index.api';
import MainLayout from '../layout/MainLayout';
import { Sidebar } from '../components/Sidebar';

export const Vistagaleriascreen = () => {
	const [documentales, setDocumentales] = useState([]);
	const [viewPlay, setViewPlay] = useState(false);
	const [urlVideo, setUrlVideo] = useState('');

	useEffect(() => {
		getDocumentales();
	}, []);

	const getDocumentales = async () => {
		try {
			const response = await _verDocumentales();
			const cleanResponse = buildDocumentales(response);
			setDocumentales(cleanResponse);
		} catch (error) {
			console.log(error);
		}
	};

	const buildDocumentales = (array = []) =>
		array.map(documental => {
			let obj = { ...documental };
			obj.view = false;
			return obj;
		});

	const toogleView = () => setViewPlay(!viewPlay);

	return (
		<>
			<div className='app '>
				<Sidebar />
				<main className=' container'>
					<section className='fondochingon d-flex justify-content-center align-items-center'>
						<Container className=' d-flex justify-content-center align-items-center'>
							<div className='d-flex flex-wrap'>
								{documentales.map(({ Nombre, categoria, Trama, URL }) => {
									return (
										<Card
											key={URL}
											style={{ maxWidth: 500, margin: 10 }}
											className='cartaGrande animate__backInRight'
										>
											<CardBody>
												<CardTitle tag='h5'>{Nombre}</CardTitle>
												<CardSubtitle
													className='mb-2 text-muted'
													tag='h6'
												>
													{categoria}
												</CardSubtitle>
												<CardText>{Trama}</CardText>
												<Button
													style={styles.button}
													onClick={() => {
														setUrlVideo(URL);
														toogleView();
													}}
												>
													<img
														src={triangulo}
														alt='icono'
														style={styles.img}
													/>
													Reproducir
												</Button>
											</CardBody>
										</Card>
									);
								})}
							</div>
						</Container>
					</section>
					<Modal
						isOpen={viewPlay}
						toggle={toogleView}
						style={{ width: 700, height: 700 }}
						size='lg'
					>
						<ModalBody>
							<div style={{ height: 'auto', width: 670 }}>
								<VideoContentYT
									src={`${urlVideo}`}
									params={{ autoPlay: true }}
								/>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button onClick={toogleView}>Cerrar</Button>
						</ModalFooter>
					</Modal>
				</main>
			</div>
		</>
	);
};

const styles = {
	button: {
		backgroundColor: '#525C90',
		borderRadius: 15,
		width: 160,
	},
	img: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
};
