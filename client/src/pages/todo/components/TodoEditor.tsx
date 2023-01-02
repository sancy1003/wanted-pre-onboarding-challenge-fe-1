import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useFetch from '../../../hooks/useFetch';
import useMutation from '../../../hooks/useMutation';
import { TodoResponse } from '../../../types/todo';
import { todoListState } from '../atoms';

const TodoEditor = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [_, setTodoList] = useRecoilState(todoListState);
	const [todoForm, setTodoForm] = useState({
		title: '',
		content: '',
	});

	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setTodoForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const {
		mutate: onCreate,
		error: createError,
		response: createResponse,
	} = useMutation<TodoResponse>(`http://localhost:8080/todos`, 'POST');

	const {
		mutate: onUpdate,
		error: updateError,
		response: updateResponse,
	} = useMutation<TodoResponse>(`http://localhost:8080/todos/${id}`, 'PUT');

	const {
		error: fetchError,
		fetch,
		response: fetchResponse,
	} = useFetch<TodoResponse>(id && `http://localhost:8080/todos/${id}`);

	const onSubmit = () => {
		if (id) onUpdate(todoForm);
		else onCreate(todoForm);
	};

	useEffect(() => {
		if (id) fetch();
		else setTodoForm({ title: '', content: '' });
	}, [id]);

	useEffect(() => {
		if (fetchResponse) {
			setTodoForm({
				title: fetchResponse.data.title,
				content: fetchResponse.data.content,
			});
		}
	}, [fetchResponse]);

	useEffect(() => {
		if (createResponse) {
			setTodoList((prev) => [...prev, createResponse.data]);
			navigate(`/${createResponse.data.id}`);
		}
	}, [createResponse]);

	useEffect(() => {
		if (updateResponse) {
			setTodoList((prev) =>
				prev.map((todo) => {
					if (todo.id === id) {
						return updateResponse.data;
					} else {
						return todo;
					}
				}),
			);
			navigate(`/${updateResponse.data.id}`);
		}
	}, [updateResponse]);

	useEffect(() => {
		if (createError) alert(createError);
	}, [createError]);
	useEffect(() => {
		if (updateError) alert(updateError);
	}, [updateError]);
	useEffect(() => {
		if (fetchError) alert(fetchError);
	}, [fetchError]);

	return (
		<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
			<div className="mb-5">
				<h1 className="font-bold text-lg">일정 추가</h1>
			</div>
			<div className="flex flex-col gap-y-4 h-full">
				<input
					name="title"
					type="text"
					value={todoForm.title}
					onChange={handleOnChange}
					placeholder="일정 이름"
					className="border border-slate-200 bg-slate-100 rounded-sm px-4 py-3"
				/>
				<textarea
					name="content"
					placeholder="일정 내용"
					value={todoForm.content}
					onChange={handleOnChange}
					className="flex-1 border border-slate-200 bg-slate-100 rounded-sm px-4 py-3 resize-none"
				/>
				<div className="flex justify-end gap-x-4">
					<button
						onClick={onSubmit}
						className="text-slate-600 hover:text-cyan-700 hover:font-bold"
					>
						{id ? '수정' : '등록'}
					</button>
					<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
						취소
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoEditor;
