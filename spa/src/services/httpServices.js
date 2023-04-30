import axios from 'axios';
import Cookies from 'js-cookie';
import AuthService from './auth.service';

const HttpService = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

HttpService.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			console.error('You are not logged in');
			AuthService.removeAuthToken();
			window.location.href = '/login';
			return Promise.reject('unauthorized');
		}
		return Promise.reject();
	}
);

HttpService.interceptors.request.use((config) => {
	const token = Cookies.get('access_token');
	if (token && token != '' && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

export const UninterceptedHttpService = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export default HttpService;
