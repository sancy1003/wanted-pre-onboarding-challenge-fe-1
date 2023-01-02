import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isFunctionLike } from 'typescript';
import { todoListState } from '../atoms';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [todoList] = useRecoilState(todoListState);

	const onClickAddButton = () => navigate('/add');
	const onClickLogoutButton = () => {
		localStorage.removeItem('token');
		navigate('/auth/login');
	};
	const onClickItem = (selectedId: string) => {
		if (id === selectedId) navigate(`/`);
		else navigate(`/${selectedId}`);
	};

	return (
		<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
			<div className="flex justify-between items-end mb-5">
				<h1 className="font-bold text-lg">Todos</h1>
				<div>
					<button
						onClick={onClickLogoutButton}
						className="p-2 bg-slate-500 hover:bg-slate-400 rounded-md text-xs text-white mr-2"
					>
						로그아웃
					</button>
					<button
						onClick={onClickAddButton}
						className="p-2 bg-cyan-500 hover:bg-cyan-400 rounded-md text-xs text-white"
					>
						Todo 추가
					</button>
				</div>
			</div>
			<ul className="flex flex-col gap-y-2 overflow-y-scroll">
				{todoList.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onClickItem={onClickItem}
						isSelected={id === todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
