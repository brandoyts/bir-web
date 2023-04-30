import Cookies from 'js-cookie';

class AuthService {
	static getToken = () => {
		return Cookies.get('access_token');
	};

	static saveAuthToken = (token) => {
		Cookies.set('access_token', token);
	};

	static removeAuthToken = () => {
		Cookies.remove('access_token');
	};
}

export default AuthService;
