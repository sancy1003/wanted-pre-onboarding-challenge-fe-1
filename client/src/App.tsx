import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthPage from './pages/auth/AuthPage';
import TodoListPage from './pages/todo/TodoListPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TodoListPage />,
	},
	{
		path: '/:id',
		element: <TodoListPage />,
	},
	{
		path: '/:id/edit',
		element: <TodoListPage isEdit />,
	},
	{
		path: '/create',
		element: <TodoListPage isEdit />,
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
	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
