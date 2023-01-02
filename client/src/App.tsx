import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import TodoListPage from './pages/todo/TodoListPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TodoListPage />,
	},
	{
		path: '/auth/login',
		element: <AuthPage authType="login" />,
	},
	{
		path: '/auth/signup',
		element: <AuthPage authType="create" />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
