import React from 'react';
import DataTable from 'react-data-table-component';
import { Col, Row } from 'reactstrap';

import { NotFound } from '../components';
import { Loading } from '../components/Loading';
import TableFilter from '../components/TableFilter';
import useVerDocumentales from '../hooks/useVerDocumentales';
import MainLayout from '../layout/MainLayout';

const DocumentalesScreen = () => {
	const {
		loading,
		searchItem,
		handleChangeInputSearch,
		columnsDataTable,
		foundItem,
		optionsPagination,
	} = useVerDocumentales();

	return (
		<>
			{/* <Container
				style={{ minHeight: 300 }}
				className='d-flex justify-content-center align-items-center'
			> */}
			<MainLayout>
				<Row noGutters>
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
			</MainLayout>
			{/* </Container> */}
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
				maxWidth: 1300,
				margin: 10,
				overflowY: 'auto',
			},
		},
		headCells: {
			style: {
				backgroundColor: '#343a40',
				color: '#fff',
				fontFamily: "'Roboto', sans-serif",
				fontSize: 14,
				fontWeight: 500,
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
				textAlign: 'justify',
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
};

export default DocumentalesScreen;
