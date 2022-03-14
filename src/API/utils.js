import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const getAllImages = async () => {
	try {
		const response = await axios.get('http://localhost:3001/images');
		return response.data.result;
	} catch (err) {
		console.log(err.response);
	}
};

const postImage = async (api, formData) => {
	try {
		const response = await axios.post(
			'http://localhost:3001/' + api,
			formData,
			{
				headers: { 'Content-Type': 'multipart/form-data' },
			}
		);
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};

export { getAllImages, postImage };
