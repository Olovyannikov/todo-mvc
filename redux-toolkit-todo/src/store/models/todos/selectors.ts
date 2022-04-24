import { RootState } from '../../index';

export const getTodos = (state: RootState) => state.todos.todos;