import { format } from 'path';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../../hooks/useMutation';
import { AuthResponse } from '../../../types/auth';
import { validateMinLength, validateEmail } from '../../../utils/validate';
import Signup from './Signup';

const SignupPage = () => {
	const navigate = useNavigate();
	const [signupForm, setSignupForm] = useState({
		email: '',
		password: '',
	});

	const { mutate, error, response } = useMutation<AuthResponse>(
		'http://localhost:8080/users/create',
		'POST',
	);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateEmail(signupForm.email))
			return alert('이메일 형식이 올바르지 않습니다.');

		if (!validateMinLength(signupForm.password, 8))
			return alert('비밀번호는 최소 8자 이상으로 작성해주세요.');

		mutate<typeof signupForm>({
			email: signupForm.email,
			password: signupForm.password,
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

	return (
		<Signup
			signupForm={signupForm}
			handleOnChange={handleOnChange}
			handleOnSubmit={handleOnSubmit}
		/>
	);
};

export default SignupPage;
