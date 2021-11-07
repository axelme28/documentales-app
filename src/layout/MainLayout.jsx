import React from 'react';
import { Header } from '../components';
import { useLocation } from 'react-router-dom';
import { LOG_IN } from '../constants/routes.constants';

const MainLayout = ({ children }) => {
	let location = useLocation();

	return (
		<>
			{(location.pathname === LOG_IN || location.pathname === '/prueba')? null : <Header />}

			{children}
		</>
	);
};

export default MainLayout;
