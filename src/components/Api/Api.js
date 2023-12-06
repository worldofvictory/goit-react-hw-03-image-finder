import axios from 'axios';
const API_KEY = '40085377-934ea6a0556f9d5b9d31fe42b';
axios.defaults.baseURL = 'https://pixabay.com/';

export async function getImages ({query, page}) {
	const params = new URLSearchParams({
		key: API_KEY,
		image_type: 'photo',
    safesearch: true,
    page: page,
    per_page: 12,
       
	});
		
	const { data } = await axios('/api/', {params})
	return data
	
}