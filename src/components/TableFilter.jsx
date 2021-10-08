import React, { useEffect, useState } from 'react';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';

import searchIcon from '../assets/icons/search.png';
import crossIcon from '../assets/icons/cross.png';

const TableFilter = ({ placeholder, name, value, onChange, styles = '' }) => {
	const classes = useStyles();

	const [tableValue, setTableValue] = useState(value);

	useEffect(() => {
		if (tableValue === '') onChange('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tableValue]);

	return (
		<Paper component='form' className={classes.root} style={{ ...styles }}>
			<InputBase
				className={classes.input}
				placeholder={placeholder}
				name={name}
				value={tableValue}
				onChange={e => setTableValue(e.target.value)}
			/>
			{tableValue !== '' && (
				<img
					src={crossIcon}
					alt='search icon'
					onClick={() => setTableValue('')}
					style={{ cursor: 'pointer' }}
				/>
			)}

			<IconButton
				type='submit'
				className={classes.iconButton}
				onClick={e => {
					e.preventDefault();
					onChange(tableValue);
				}}
			>
				<img src={searchIcon} alt='search icon' />
			</IconButton>
		</Paper>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		width: 736,
		height: 34,
		padding: '4px',
		display: 'flex',
		alignItems: 'center',
		fontFamily: "'Roboto', sans-serif",
		border: '1px solid #CDCDCD',
		margin: '.5rem 0',
		boxShadow: 'none',
		outline: 'none',
	},
	input: {
		marginLeft: theme.spacing(2),
		flex: 1,
		fontSize: '14px',
		boxShadow: 'none',
		fontFamily: "'Roboto', sans-serif",
	},
	iconButton: {
		padding: 10,
		boxShadow: 'none',
		cursor: 'pointer',
		outline: 'none',
	},
	divider: {
		height: 28,
		margin: 4,
		boxShadow: 'none',
	},
}));

export default TableFilter;
