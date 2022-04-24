import React from 'react';

export interface TodoItemProps {
    id: number | string;
    done: boolean;
    text: string;
    onToggleTodoHandler: (id: number | string) => void;
    onRemoveHandler: (id: number | string) => void;
}

export const TodoItem = ({id, done, text, onToggleTodoHandler, onRemoveHandler}: TodoItemProps): JSX.Element => {
    return (
        <li>
            <input type='checkbox' checked={done} onChange={() => onToggleTodoHandler(id)}/>
            <span>{ text }</span>
            <button onClick={() => onRemoveHandler(id)}>Delete</button>
        </li>
    );
};