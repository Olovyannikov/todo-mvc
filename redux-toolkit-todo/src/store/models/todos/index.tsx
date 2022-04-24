import {createSlice} from '@reduxjs/toolkit';
import { TodoState } from './types';

const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                done: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (toggledTodo) toggledTodo.done = !toggledTodo.done;
        }
    }
});

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;