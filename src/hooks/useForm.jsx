import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = ({ target }) => {
		console.log(target);
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, setValues, handleInputChange, reset];
};

export default useForm;
