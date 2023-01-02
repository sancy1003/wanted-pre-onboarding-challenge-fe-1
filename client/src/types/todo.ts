export interface Todo {
	content: string;
	createdAt: string;
	id: string;
	title: string;
	updatedAt: string;
}

export interface TodoResponse {
	data: Todo;
}

export interface TodoListResponse {
	data: Todo[];
}
