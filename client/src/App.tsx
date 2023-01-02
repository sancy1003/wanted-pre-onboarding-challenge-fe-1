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
		element: <TodoListPage todoType="edit" />,
	},
	{
		path: '/add',
		element: <TodoListPage todoType="add" />,
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
