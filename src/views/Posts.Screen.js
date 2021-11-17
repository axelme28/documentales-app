import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const PostsScreen = () => {
	return (
		<>
			<div className='app'>
				<Sidebar />
				<main className='appMain container'>
					<div>
						<div className='d-flex justify-content-center'>
							<h2>Publicaciones</h2>
						</div>
						{/* TODO: hacer escroll en este div */}
						<div style={{ marginTop: '4rem'}} className='message'>
							<div
								class='card border-primary mb-3'
								style={{ maxWidth: '18rem' }}
							>
								<div class='card-body'>
									<h5 class='card-title'>Primary card title</h5>
									<p class='card-text'>
										Some quick example text to build on the card title
										and make up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div>
                        <div className= ''>
                        <form class="form d-fex">
						<div class="mb-3">
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" style={{width:'20rem'}}/>
						</div>
						<div class="mb-3">
							<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{width:'20rem'}}/>
							</div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2">Send</button>
                            </form>
                        </div>
					</div>
				</main>
			</div>
		</>
	);
};
