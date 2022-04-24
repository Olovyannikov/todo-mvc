import React from 'react';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { removeTodo, toggleTodo } from '../store/models/todos/index';

export interface TodoItemProps {
    id: number | string;
    done: boolean;
    text: string;
}

export const TodoItem = ({id, done, text}: TodoItemProps): JSX.Element => {
    const dispatch = useTypedDispatch();

    return (
        <li key={id}>
            <input type='checkbox' checked={done} onChange={() => dispatch(toggleTodo({ id }))}/>
            <span>{ text }</span>
            <button onClick={() => dispatch(removeTodo({ id }))}>Delete</button>
        </li>
    );
};