import { types } from './types';
import axios from 'axios';

// Action creator
export const getPosts = () => async (dispatch) => {
	await axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			dispatch({
				type: types.GET_POSTS,
				payload: response.data.slice(0, 10)
			});
		})
		.catch(error => {
			console.log('Aborting', error);
		});
}