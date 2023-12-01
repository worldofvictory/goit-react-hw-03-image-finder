import axios from 'axios';
const API_KEY = '40085377-934ea6a0556f9d5b9d31fe42b';
axios.defaults.baseURL = 'https://pixabay.com/';

export const getProducts = async () => {
	const { data } = await axios()
	return data
}