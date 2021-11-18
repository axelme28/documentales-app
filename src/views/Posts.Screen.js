import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const PostsScreen = () => {
	return (
		<>
			<div className='app'>
				<Sidebar />

				<main className='appMain container'>
					<div
						className='d-flex justify-content-center'
						style={{ backgroundColor: '#515D8A', color: 'white' }}
					>
						<h2>Publicaciones</h2>
					</div>
					<div className=''>
						<div style={{ height: '26rem' }} className='posts'>
							<div
								style={{ marginTop: '4rem', marginRight: '2rem' }}
								className='message'
							>
								<div
									class='card border-primary mb-3'
									style={{ maxWidth: '18rem' }}
								>
									<div class='card-body'>
										<h5 class='card-title'>Primary card title</h5>
										<p class='card-text'>
											Some quick example text to build on the card
											title and make up the bulk of the card's
											content.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='d-flex align-items-center justify-content-center'
							data-spy='scroll'
						>
							<form class='form d-fex'>
								<div class='mb-3'>
									<input
										type='text'
										class='form-control'
										id='formGroupExampleInput'
										placeholder='Titulo de la publicacion'
										style={{ width: '35rem' }}
									/>
								</div>
								<div class='mb-3'>
									<textarea
										class='form-control'
										placeholder='Mesage de la publicacion'
										id='floatingTextarea'
										style={{ width: '35rem' }}
									/>
								</div>
								<button
									type='submit'
									className='btn btn-primary mb-2 ml-2'
								>
									Publicar
								</button>
							</form>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};
