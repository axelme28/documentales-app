import React from 'react'

export const DocuentalesScreen = () => {
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	// const filteredItems = fakeUsers.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	// );

	// const subHeaderComponentMemo = React.useMemo(() => {
	// 	const handleClear = () => {
	// 		if (filterText) {
	// 			setResetPaginationToggle(!resetPaginationToggle);
	// 			setFilterText('');
	// 		}
	// 	};

	// 	return (
	// 		<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
	// 	);
	// }, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			title="Contact List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/>
	);
}