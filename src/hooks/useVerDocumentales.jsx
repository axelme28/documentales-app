import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';

import { _eliminarDocumental, _verDocumentales } from '../api/index.api';
import { filterItemInTable, formateDate } from '../helpers/functions.helper';

const useVerDocumentales = () => {
	const [loading, setLoading] = useState(false);
	const [documentales, setDocumentales] = useState([]);
	const [foundItem, setFoundItem] = useState([]);
	const [searchItem, setSearchItem] = useState('');

	useEffect(() => {
		obtenerDocumentales();
	}, []);

	useEffect(() => {
		searchItem.length === 0
			? setFoundItem(documentales)
			: filterItemInTable(searchItem, setFoundItem, documentales);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchItem]);

	useEffect(() => {
		if (searchItem.length === 0) setFoundItem(documentales);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [foundItem]);

	const obtenerDocumentales = async () => {
		try {
			setLoading(true);
			const _documentales = await _verDocumentales();
			setDocumentales(_documentales);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChangeInputSearch = value => {
		setSearchItem(value);
		filterItemInTable(searchItem, setFoundItem, documentales);
	};

	const handleDelete = async idDocumental => {
		try {
			Swal.fire({
				title: 'Estas seguro de eliminar el documental?',
				showDenyButton: true,
				denyButtonText: `No`,
				confirmButtonText: 'Si',
			}).then(result => {
				if (result.isConfirmed) {
					_eliminarDocumental({ idDocumental }).then(
						() => Swal.fire('Documental eliminado!', '', 'success'),
						obtenerDocumentales(),
					);
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	const optionsPagination = {
		rowsPerPageText: 'Mostrar',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: '*',
	};

	const columnsDataTable = [
		{ name: 'Nombre', selector: row => row.Nombre, sortable: true },
		{
			name: 'Fecha Lanzamiento',
			selector: row => formateDate(row.Fecha_lanzamiento),
			sortable: true,
		},
		{ name: 'Elenco', selector: row => row.Elenco, sortable: true },
		{ name: 'Duración', selector: row => row.Duracion, sortable: true },
		{ name: 'Trama', selector: row => row.Trama, sortable: true },
		{ name: 'Productor', selector: row => row.Productor, sortable: true },
		{ name: 'Escritor', selector: row => row.Escritor, sortable: true },
		{ name: 'Categoría', selector: row => row.categoria, sortable: true },
		{ name: 'Clasificación', selector: row => row.Clasificacion, sortable: true },
		{ name: 'Idioma', selector: row => row.Idioma, sortable: true },
		{ name: 'País', selector: row => row.Pais, sortable: true },
		{ name: 'Director', selector: row => row.director, sortable: true },
		{
			name: '',
			selector: row => (
				<Button
					color='danger'
					style={{
						height: 22,
						width: 62,
						fontFamily: "'Roboto', sans-serif",
						fontWeight: 400,
						fontSize: 12,
						padding: 0,
					}}
					onClick={() => handleDelete(row.idDocumental)}
				>
					Eliminar
				</Button>
			),
			sortable: true,
		},
	];
	return {
		loading,
		searchItem,
		handleChangeInputSearch,
		columnsDataTable,
		foundItem,
		optionsPagination,
	};
};

export default useVerDocumentales;
