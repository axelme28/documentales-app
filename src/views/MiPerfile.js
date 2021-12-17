import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { useCurrentTeam } from '../hooks/useCurrentTeam';

export const MiPerfile = () => {
	const { setCurrentTeam } = useCurrentTeam();
	const {
		apellido_materno,
		apellido_paterno,
		fecha_naci,
		no_trabajador,
		nombre,
		typeUser,
		boleta,
	} = JSON.parse(localStorage.getItem('userInfo'));
	return (
		<div className='app'>
			<Sidebar setCurrentTeam={setCurrentTeam} />
			<main className='appMain' style={{ position: 'relative' }}>
				<div
					className='d-flex justify-content-center'
					style={{ backgroundColor: '#515d8a', height: 29 }}
				>
					<h4 style={{ color: 'white' }}>Mi perfil</h4>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='card'>
								<div className='card-body'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group'>
												<label>Nombre</label>
												<input
													type='text'
													className='form-control'
													value={nombre}
													disabled
												/>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group'>
												<label>Apellido Paterno</label>
												<input
													type='text'
													className='form-control'
													value={apellido_paterno}
													disabled
												/>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group'>
												<label>Apellido Materno</label>
												<input
													type='text'
													className='form-control'
													value={apellido_materno}
													disabled
												/>
											</div>
										</div>
										{typeUser === 'profesor' ? (
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Numero de trabanjador</label>
													<input
														type='text'
														className='form-control'
														value={no_trabajador}
														disabled
													/>
												</div>
											</div>
										) : (
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Numero de boleta</label>
													<input
														type='text'
														className='form-control'
														value={boleta}
														disabled
													/>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
