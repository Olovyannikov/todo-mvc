import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
}

export const TodoList = ({children, ...props}: TodoListProps): JSX.Element => {
    return (
        <ul {...props}>
            {children}
        </ul>
    );
};