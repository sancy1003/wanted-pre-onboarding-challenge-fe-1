import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import { AuthResponse } from '../../types/auth';
import { validateMinLength, validateEmail } from '../../utils/validate';
import Login from './Login';
import Signup from './Signup';

interface Props {
	authType: 'login' | 'create';
}

const AuthPage = ({ authType }: Props) => {
	const navigate = useNavigate();
	const [authForm, setAuthForm] = useState({
		email: '',
		password: '',
	});

	const { mutate, error, response } = useMutation<AuthResponse>(
		`http://localhost:8080/users/${authType}`,
		'POST',
	);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateEmail(authForm.email))
			return alert('이메일 형식이 올바르지 않습니다.');

		if (!validateMinLength(authForm.password, 8))
			return alert('비밀번호는 최소 8자 이상으로 작성해주세요.');

		mutate<typeof authForm>({
			email: authForm.email,
			password: authForm.password,
		});
	};

	useEffect(() => {
		if (response) {
			localStorage.setItem('token', response.token);
			navigate('/');
		}
	}, [response]);

	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return authType === 'login' ? (
		<Login
			authForm={authForm}
			handleOnChange={handleOnChange}
			handleOnSubmit={handleOnSubmit}
		/>
	) : (
		<Signup
			authForm={authForm}
			handleOnChange={handleOnChange}
			handleOnSubmit={handleOnSubmit}
		/>
	);
};

export default AuthPage;
