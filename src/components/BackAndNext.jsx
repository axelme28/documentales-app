import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import back from '../assets/icons/arrow-small-left.png';
import next from '../assets/icons/arrow-small-right.png';

export const BackAndNext = () => {
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};
	const goNext = () => {
		history.goForward();
	};
	return (
		<div className='d-flex justify-content-start'>
			<button className='btn' onClick={goBack}>
				<img src={back} alt='back' style={styles.img} />
			</button>
			<button className='btn' onClick={goNext}>
				<img src={next} alt='next' style={styles.img} />
			</button>
		</div>
	);
};

const styles = {
	img: {
		width: '20px',
		height: '20px',
		margin: '0px 5px',
	},
};
