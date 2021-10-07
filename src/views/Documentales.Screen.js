import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { NotFound } from '../components';
import { _verDocumentales } from '../api/index.api';
import { Container, Row } from 'reactstrap';

// "Fecha_lanzamiento": "2000-05-02",
// "Elenco": "uriel",
// "Duracion": 120,
// "Trama": "Uriel siempre llega tarde",
// "Productor": "axel",
// "Escritor": "jonnas",
// "categoria": "bélicos",
// "Clasificacion": "B",
// "Idioma": "Espanol",
// "Pais": "Mexico",
// "director": "aletz"
const columnsDataTable = [
	{ name: 'Nombre', selector: row => row.Nombre, sortable: true },
	{ name: 'Fecha_Lanzamiento', selector: row => row.Fecha_lanzamiento, sortable: true },
	{ name: 'Elenco', selector: row => row.Elenco, sortable: true },
	{ name: 'Duracion', selector: row => row.Duracion, sortable: true },
	{ name: 'Trama', selector: row => row.Trama, sortable: true },
	{ name: 'Productor', selector: row => row.Productor, sortable: true },
	{ name: 'Escritor', selector: row => row.Escritor, sortable: true },
	{ name: 'categoria', selector: row => row.categoria, sortable: true },
	{ name: 'Clasificacion', selector: row => row.Clasificacion, sortable: true },
	{ name: 'Idioma', selector: row => row.Idioma, sortable: true },
	{ name: 'Pais', selector: row => row.Pais, sortable: true },
	{ name: 'director', selector: row => row.director, sortable: true },
];
const optionsPagination = {
	rowsPerPageText: 'Mostrar',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: '*',
};

const DocumentalesScreen = () => {
	const [documentales, setDocumentales] = useState([]);

	useEffect(() => {obtenerDocumentales()}, []);

	const obtenerDocumentales = async () => {
		try {
			const _documentales = await _verDocumentales();
			setDocumentales(_documentales);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<> 	
			<Container style={{height:600}} className="d-flex justify-content-center align-items-center">
				<Row>
			 <  DataTable //se conoce como props o propiedades de los 
						// clearSelectedRows={clear}
						columns={columnsDataTable}
						// customStyles={styles.dataTable}
						data={documentales}
						dense//ser comprimidas
						fixedHeader
						highlightOnHover//sombrear datos
						noDataComponent={<NotFound />}//pinta si no encuentra nada
						//onSelectedRowsChange={handleRow} //genera radiobuton 
						pagination
						paginationComponentOptions={optionsPagination}
						responsive// ajustar a cualquier tipo de pantalla
						//seleccionableRowsNoSelectAll
						//selectableRows
						//selectableRowsComponent={RadioButton}
						striped//filas de diferentes colores 
					/>
				</Row>	
			 </Container>
		</>
	);
};
// const styles = {
// 	dataTable: {
// 		table: {
// 			style: {
// 				fontFamily: font.family,
// 				border: '1px solid rgba(0, 0, 0, 0.15)',
// 				height: 250,
// 				width: 450,
// 			},
// 		},
// 		headCells: {
// 			style: {
// 				backgroundColor: colors.grayStrong,
// 				color: colors.orange,
// 				fontSize: 12,
// 				fontWeight: 700,
// 				display: 'flex',
// 				justifyContent: 'center',
// 				height: 47,
// 				padding: 0,
// 			},
// 		},
// 		rows: {
// 			style: {
// 				height: 32,
// 			},
// 		},
// 		cells: {
// 			style: {
// 				fontSize: 12,
// 				color: colors.gray,
// 				display: 'flex',
// 				justifyContent: 'start',
// 				paddingLeft: 45,
// 				width: 'auto',
// 			},
// 		},
// 		pagination: {
// 			style: {
// 				// textAlign: 'center',
// 				display: 'flex',
// 				justifyContent: 'center',
// 				border: 'none',
// 			},
// 		},
// 	},
// };

export default DocumentalesScreen;
