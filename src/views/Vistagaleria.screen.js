import React from 'react';
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
	return (
		<>
			<section className='fondochingon'>
				<Container className='py-5'>
					<Card style={{ maxWidth: 500 }}>
						<CardBody>
							<CardTitle tag='h5'>Card title</CardTitle>
							<CardSubtitle className='mb-2 text-muted' tag='h6'>
								Card subtitle
							</CardSubtitle>
							<CardText>
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
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
				</Container>
			</section>
		</>
	);
};
