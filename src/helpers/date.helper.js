export const fechaActual = () => {
	let f = new Date();
	return [f.getDate(), f.getMonth(), f.getFullYear()];
};

export const fechaOk = (string = '') =>
	string
		.split('-')
		.map(item => parseInt(item))
		.reverse();

export const compararFechas = fechaForm => {
	let fActual = fechaActual();
	let fForm = fechaOk(fechaForm);

	let [, , anioA] = fActual;
	let [, , anioF] = fForm;

	if (anioF > anioA) {
		return true;
	}
};
