import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useFetch from '../../hooks/useFetch';
import useUser from '../../hooks/useUser';
import { TodoListResponse } from '../../types/todo';
import { todoListState } from './atoms';
import Layout from './components/Layout';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import TodoViewer from './components/TodoViewer';

interface Props {
	isEdit?: boolean;
}

const TodoListPage = ({ isEdit }: Props) => {
	const { checkUser } = useUser();
	const [_, setTodoList] = useRecoilState(todoListState);

	const { error, fetch, response } = useFetch<TodoListResponse>(
		'http://localhost:8080/todos',
	);

	useEffect(() => {
		if (checkUser()) fetch();
	}, []);

	useEffect(() => {
		if (response) setTodoList(response.data);
	}, [response]);

	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<Layout>
			<TodoList />
			{isEdit ? <TodoEditor /> : <TodoViewer />}
		</Layout>
	);
};

export default TodoListPage;
