import React from 'react';
import { Header } from '../components';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default MainLayout;
