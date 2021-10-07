import React from 'react';

const Title = ({ title = '', className = '' }) => {
	return (
		<h1 className={className} style={styles.title}>
			{title.toUpperCase()}
		</h1>
	);
};

const styles = {
	title: {
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 700,
	},
};

export default Title;
