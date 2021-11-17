import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const PostsScreen = () => {
	return (
		<>
			<div className='app '>
				<Sidebar />
				<main className='appMain'>
					<div>
						<div>
							<h2>Publicaciones</h2>
						</div>
						{/* TODO: hacer escroll en este div */}
						<div style={{ marginTop: '4rem' }}>
							<div
								class='card border-primary mb-3'
								style={{ maxWidth: '18rem' }}
							>
								<div class='card-header' style={{ color: '#515D8A' }}>
									Header
								</div>
								<div class='card-body'>
									<h5 class='card-title'>Primary card title</h5>
									<p class='card-text'>
										Some quick example text to build on the card title
										and make up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div>
                        <div className='align-content-end'>
                        <form class="form-inline">
                            <div classNameName="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" className="sr-only">Title</label>
                                <input type="text" className="form-control" id="inputPassword2" placeholder="Title"/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2">Confirm identity</button>
                            </form>
                        </div>
					</div>
				</main>
			</div>
		</>
	);
};
