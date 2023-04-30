import AuthService from '@/services/auth.service';
import HttpService, { UninterceptedHttpService } from '@/services/httpServices';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const useAuth = ({ middleware } = {}) => {
	const csrf = () => axios.get('http://localhost:4000/sanctum/csrf-cookie');

	const login = async (credentials) => {
		await csrf();

		const response = await UninterceptedHttpService.post(
			'/api/v1/auth/login',
			credentials
		);

		return response;
	};

	const logout = async () => {
		await HttpService.post('/api/v1/auth/logout');
		AuthService.removeAuthToken();
		window.location.pathname = '/login';
	};

	useEffect(() => {
		if (middleware === 'auth' && !Cookies.get('access_token')) {
			window.location.pathname = '/login';
		} else if (middleware === 'guest' && Cookies.get('access_token')) {
			window.location.pathname = '/dashboard';
		}
	}, []);

	return {
		login,
		logout,
	};
};

export default useAuth;
