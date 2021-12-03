export const objArray = (obj = {}) => {
	let arr = [];

	for (let key in obj) {
		arr.push(obj[key]);
	}

	return arr;
};

export const findElementInObject = (string = '', object = {}) => {
	for (let prop in object) {
		if (object[prop] !== null) {
			let property = object[prop].toString().trim().toLowerCase();
			let cleanString = string.toString().trim().toLowerCase();
			if (property.includes(cleanString)) {
				return object;
			}
		}
	}
};

export const filterItemInTable = (
	searchedItem = '',
	fnSaveItem = () => {},
	arrayToSearch = [],
) => {
	let searchList = searchedItem.split(',').map(item => item.trim());

	if (searchList.length > 1) {
		let result = [];

		for (let i = 0; i < searchList.length; i++) {
			for (let j = 0; j < arrayToSearch.length; j++) {
				//prettier-ignore
				let resultSearch = findElementInObject(searchList[i], arrayToSearch[j]) || '';
				if (resultSearch !== '') result.push(resultSearch);
			}
		}
		fnSaveItem(result.filter(item => item !== ''));
	} else {
		//prettier-ignore
		let searchResult = arrayToSearch.filter(item => findElementInObject(searchedItem, item));
		fnSaveItem(searchResult);
	}
};

export const formateDate = (date = '') => date.split('-').reverse().join('/');
