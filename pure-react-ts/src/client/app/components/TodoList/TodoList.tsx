import cn from "classnames";
import s from './TodoList.module.scss';
import {TodoListProps} from "./TodoList.props";

export const TodoList = ({children, className, ...props}: TodoListProps): JSX.Element => {
    return (
        <ul className={cn(className, s.list)} {...props}>
            {children}
        </ul>
    )
}