import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { NotFound } from '../components';
import { _eliminarDocumental, _verDocumentales } from '../api/index.api';
import { Button, Col, Container, Row } from 'reactstrap';
import { Loading } from '../components/Loading';
import { filterItemInTable, formateDate } from '../helpers/functions.helper';
import TableFilter from '../components/TableFilter';
import Swal from 'sweetalert2';

const optionsPagination = {
	rowsPerPageText: 'Mostrar',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: '*',
};

const DocumentalesScreen = () => {
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
		// e.persist();
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
			// const _documentalResponse = await _eliminarDocumental(id);
		} catch (error) {
			console.log(error);
		}
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
					style={styles.btnDelete}
					onClick={() => handleDelete(row.idDocumental)}
				>
					Eliminar
				</Button>
			),
			sortable: true,
		},
	];

	return (
		<>
			<Container
				style={{ minHeight: 300 }}
				className='d-flex justify-content-center align-items-center'
			>
				<Row>
					{loading ? (
						<Col
							sm='auto'
							md='12'
							className='d-flex justify-content-center align-items-center mt-5 pt-3'
						>
							<Loading />
						</Col>
					) : (
						<>
							<Col
								sm='auto'
								md='12'
								className='d-flex justify-content-center mt-5'
							>
								<TableFilter
									placeholder={'Busqueda de Documentales'}
									name={'search'}
									value={searchItem}
									onChange={handleChangeInputSearch}
									styles={{
										width: 400,
										fontFamily: "'Roboto', sans-serif",
									}}
								/>
							</Col>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: '100%' }}
							>
								<div className='mt-3'>
									<DataTable
										//clearSelectedRows={clear}
										//customStyles={styles.dataTable}
										//onSelectedRowsChange={handleRow} //genera radiobuton
										//se conoce como props o propiedades de los
										//seleccionableRowsNoSelectAll
										//selectableRows
										//selectableRowsComponent={RadioButton}
										customStyles={styles.dataTable}
										columns={columnsDataTable}
										data={foundItem}
										dense //ser comprimidas
										fixedHeader
										highlightOnHover //sombrear datos
										noDataComponent={<NotFound />} //pinta si no encuentra nada
										pagination
										paginationComponentOptions={optionsPagination}
										responsive // ajustar a cualquier tipo de pantalla
										striped //filas de diferentes colores
									/>
								</div>
							</div>
						</>
					)}
				</Row>
			</Container>
		</>
	);
};

const styles = {
	dataTable: {
		table: {
			style: {
				border: '1px solid rgba(0, 0, 0, 0.15)',
				height: 'auto',
				maxHeight: 550,
				minHeight: 200,
				width: 'auto',
				margin: 10,
				overflowY: 'auto',
			},
		},
		headCells: {
			style: {
				backgroundColor: '#F2F2F2',
				color: '#28a745',
				fontFamily: "'Roboto', sans-serif",
				fontSize: 14,
				fontWeight: 700,
				display: 'flex',
				justifyContent: 'center',
				height: 47,
				padding: 0,
			},
		},
		cells: {
			style: {
				fontFamily: "'Roboto', sans-serif",
				fontSize: 14,
				color: '#818181',
				display: 'flex',
				justifyContent: 'center',
				padding: 0,
				height: 'auto',
			},
		},
		tableCell: {
			style: {
				padding: 0,
				margin: 0,
				height: 'auto',
			},
		},
		pagination: {
			style: {
				borderTop: 'none',
			},
		},
	},
	btnDelete: {
		height: 22,
		width: 62,
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 400,
		fontSize: 12,
		padding: 0,
	},
};

export default DocumentalesScreen;
