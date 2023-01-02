import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { TodoResponse } from '../../../types/todo';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { isLoading, error, fetch, response } = useFetch<TodoResponse>(
		'http://localhost:8080/todos',
	);

	useEffect(() => {
		fetch();
	}, []);

	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
			<div className="flex justify-between items-end mb-5">
				<h1 className="font-bold text-lg">Todos</h1>
				<button className="p-2 bg-cyan-500 hover:bg-cyan-400 rounded-md text-xs text-white">
					Todo 추가
				</button>
			</div>
			<ul className="flex flex-col gap-y-2 overflow-y-scroll">
				{response?.data.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
