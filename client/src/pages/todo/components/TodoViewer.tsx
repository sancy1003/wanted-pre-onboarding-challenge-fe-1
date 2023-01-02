import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { TodoResponse } from '../../../types/todo';

const TodoViewer = () => {
	const { id } = useParams();
	const { error, fetch, response } = useFetch<TodoResponse>(
		id && `http://localhost:8080/todos/${id}`,
	);

	useEffect(() => {
		fetch();
	}, [id]);

	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
			<div className="mb-5">
				<h1 className="font-bold text-lg">일정</h1>
			</div>
			<div className="flex flex-col gap-y-4 h-full">
				<div className="flex-1">
					<div className="mb-7">
						<label className="font-bold mb-2 block text-cyan-600">
							일정 이름
						</label>
						<p>{response?.data.title}</p>
					</div>
					<div>
						<label className="font-bold mb-2 block text-cyan-600">
							일정 내용
						</label>
						<p className="flex-1">{response?.data.content}</p>
					</div>
				</div>
				<div className="flex justify-end gap-x-4">
					<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
						수정
					</button>
					<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
						삭제
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoViewer;
