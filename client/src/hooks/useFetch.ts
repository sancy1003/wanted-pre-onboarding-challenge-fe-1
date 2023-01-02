import axios, { AxiosError } from 'axios';
import { useState } from 'react';

const useFetch = <Response>(url: string) => {
	const [response, setResponse] = useState<Response | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetch = async () => {
		if (isLoading) return;

		setIsLoading(true);

		try {
			const token = localStorage.getItem('token');
			const response = await axios<Response>({
				url,
				headers: { Authorization: token },
			});

			if (response.status === 200) {
				setError(null);
				setResponse(response.data);
			} else setResponse(null);
		} catch (error) {
			const err = error as AxiosError<{ details: string }>;
			if (err.response?.data?.details) {
				setError(err.response.data.details);
			} else {
				setResponse(null);
				setError('알 수 없는 오류가 발생했습니다.');
			}
		}

		setIsLoading(false);
	};

	return { isLoading, fetch, response, error };
};

export default useFetch;
