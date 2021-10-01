import React from 'react';

const Input = ({
	type = '',
	className = '',
	onChange = () => {},
	onFocus = () => {},
	name = '',
	value = '',
}) => {
	return (
		<input
			type={type}
			className={className}
			onChange={onChange}
			onFocus={onFocus}
			name={name}
			value={value}
			min='0'
		/>
	);
};

export default Input;
