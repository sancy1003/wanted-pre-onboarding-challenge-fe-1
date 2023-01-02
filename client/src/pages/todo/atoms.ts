import { atom } from 'recoil';
import { Todo } from '../../types/todo';

const initalState: Todo[] = [];

export const todoListState = atom({
	key: 'todoListState',
	default: initalState,
});
