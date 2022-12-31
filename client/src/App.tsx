import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/auth/login/LoginPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>root</div>,
	},
	{
		path: '/auth/login',
		element: <LoginPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
