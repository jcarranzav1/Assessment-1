import { BASE_URL } from './consts';
/* const limit = 9;
const sort = 'asc'; */
export const getProducts = async () => {
	try {
		//const resp = await fetch(`${BASE_URL}?limit=${limit}&sort=${sort}`);
		const resp = await fetch(`${BASE_URL}`);
		const payload = await resp.json();
		return payload;
	} catch (err) {
		return err;
	}
};
