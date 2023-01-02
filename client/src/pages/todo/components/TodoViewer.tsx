import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useFetch from '../../../hooks/useFetch';
import useMutation from '../../../hooks/useMutation';
import { TodoDeleteResponse, TodoResponse } from '../../../types/todo';
import { todoListState } from '../atoms';

const TodoViewer = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [_, setTodoList] = useRecoilState(todoListState);
	const {
		error: fetchError,
		fetch,
		isLoading,
		response: fetchResponse,
	} = useFetch<TodoResponse>(id && `http://localhost:8080/todos/${id}`);
	const {
		error: deleteError,
		mutate,
		response: deleteResponse,
	} = useMutation<TodoDeleteResponse>(
		`http://localhost:8080/todos/${id}`,
		'DELETE',
	);

	const onDelete = () => {
		mutate();
	};

	useEffect(() => {
		fetch();
	}, [id]);

	useEffect(() => {
		if (deleteResponse) {
			setTodoList((prev) => prev.filter((todo) => todo.id !== id));
			navigate('/');
		}
	}, [deleteResponse]);

	useEffect(() => {
		if (fetchError) alert(fetchError);
		if (deleteError) alert(deleteError);
	}, [fetchError, deleteError]);

	return (
		<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
			{id ? (
				!isLoading && (
					<>
						<div className="mb-5">
							<h1 className="font-bold text-lg">일정</h1>
						</div>
						<div className="flex-1 flex flex-col gap-y-4 mb-4">
							<div className="flex-1 flex flex-col">
								<div className="mb-7">
									<label className="font-bold mb-2 block text-cyan-600">
										일정 이름
									</label>
									<p>{fetchResponse?.data.title}</p>
								</div>
								<div className="flex-1 flex flex-col">
									<label className="font-bold mb-2 block text-cyan-600">
										일정 내용
									</label>
									<p className="flex-1 basis-0 overflow-y-scroll">
										{fetchResponse?.data.content}
									</p>
								</div>
							</div>
						</div>
						<div className="flex justify-end gap-x-4">
							<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
								수정
							</button>
							<button
								onClick={onDelete}
								className="text-slate-600 hover:text-cyan-700 hover:font-bold"
							>
								삭제
							</button>
						</div>
					</>
				)
			) : (
				<div className="flex h-full items-center justify-center">
					선택한 일정이 없습니다.
				</div>
			)}
		</div>
	);
};

export default TodoViewer;
