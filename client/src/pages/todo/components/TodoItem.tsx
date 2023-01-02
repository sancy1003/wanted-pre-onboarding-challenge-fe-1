import React from 'react';
import { Todo } from '../../../types/todo';

interface Props {
	todo: Todo;
	isSelected: boolean;
	onClickItem: (id: string) => void;
}

const TodoItem = ({ todo, onClickItem, isSelected }: Props) => {
	return (
		<li
			key={todo.id}
			onClick={() => onClickItem(todo.id)}
			className={`flex px-4 py-2 text-[15px] ${
				isSelected ? 'bg-slate-300' : 'bg-slate-100 hover:bg-slate-50'
			} rounded-md cursor-pointer`}
		>
			<p className="flex-1">{todo.title}</p>
		</li>
	);
};

export default React.memo(TodoItem);
