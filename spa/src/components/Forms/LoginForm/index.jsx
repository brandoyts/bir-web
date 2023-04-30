import AuthLayout from '@/components/Layouts/AuthLayout';
import FormError from '@/components/common/FormError';
import useAuth from '@/hooks/useAuth';
import AuthService from '@/services/auth.service';
import HttpService from '@/services/httpServices';
import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
	const router = useRouter();
	const { handleSubmit, register, reset } = useForm();
	const { login } = useAuth({ middleware: 'guest' });
	const [formError, setFormError] = useState('');

	const onFormSubmit = async (values) => {
		setFormError('');
		try {
			await HttpService.get('/sanctum/csrf-cookie');

			const postData = {
				email: values.email,
				password: values.password,
			};

			const { data } = await login(postData);
			console.log(data);

			if (data.code === 401) {
				reset();
				return setFormError(data.message);
			}

			if (data.success && data) {
				const bearerToken = data.data.access_token;
				AuthService.saveAuthToken(bearerToken);
				reset();
				router.push('/dashboard');
			}
		} catch (error) {
			console.log(error, 'tesasdasdast');
		}
	};
	console.log(formError);
	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<AuthLayout>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				{formError && formError !== '' ? <FormError error={formError} /> : null}
				<Stack spacing={3}>
					<TextField
						required
						id="email"
						label="Email"
						variant="outlined"
						autoComplete="off"
						type="email"
						{...register('email')}
					/>
					<TextField
						required
						id="password"
						label="Password"
						variant="outlined"
						autoComplete="false"
						type="password"
						{...register('password')}
					/>
					<Button variant="contained" size="large" type="submit">
						Login
					</Button>
				</Stack>
			</form>
		</AuthLayout>
	);
}

export default LoginForm;
