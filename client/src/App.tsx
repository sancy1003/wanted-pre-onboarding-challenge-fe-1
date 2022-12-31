import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage';
import SignupPage from './pages/auth/signup/SignupPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>root</div>,
	},
	{
		path: '/auth/login',
		element: <LoginPage />,
	},
	{
		path: '/auth/signup',
		element: <SignupPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
