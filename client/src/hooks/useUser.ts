import { useNavigate } from 'react-router-dom';

const useUser = () => {
	const navigate = useNavigate();

	const checkUser = () => {
		const userToken = localStorage.getItem('token');
		if (!userToken) {
			navigate('/auth/login');
			return false;
		}
		return true;
	};

	return { checkUser };
};

export default useUser;
