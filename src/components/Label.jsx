import React from 'react';

const Label = ({ label = '', className = '', style = {} }) => {
	return (
		<label className={className} style={style}>
			{label}
		</label>
	);
};

export default Label;
