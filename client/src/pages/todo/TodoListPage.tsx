import Layout from './components/Layout';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

interface Props {
	todoType?: 'add' | 'edit';
}

const TodoListPage = ({ todoType }: Props) => {
	return (
		<Layout>
			<TodoList />
			<TodoEditor />
		</Layout>
	);
};

export default TodoListPage;
