import React, { ChangeEvent, FormEvent } from 'react';

export interface TodoControlsProps {
    text: string;
    setText: (e: string) => void;
    onAddTodoHandler: () => void;
}

export const TodoControls = ({text, setText, onAddTodoHandler}: TodoControlsProps): JSX.Element => {
    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onAddTodoHandler();
        }}>
            <input value={ text } onChange={ (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value) }/>
            <button >Add Todo</button>
        </form>
    );
};