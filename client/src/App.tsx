import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>root</div>,
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
