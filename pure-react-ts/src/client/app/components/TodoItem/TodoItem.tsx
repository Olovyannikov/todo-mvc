import cn from 'classnames';
import {Icon} from "../index";
import {useContext} from "react";
import s from './TodoItem.module.scss';
import {TodoItemProps} from "./TodoItem.props";
import {TodoInput} from "./TodoInput/TodoInput";
import {Context} from '../../../context/context';

export const TodoItem = ({children, className, index, item, onChange, ...props}: TodoItemProps): JSX.Element => {
    const {removeTodo} = useContext(Context);

    return (
        <li className={cn(className, s.item)} {...props}>
            <label className={cn({[s.checked]: item.completed})}>
                <TodoInput
                    index={item.id}
                    defaultChecked={item.completed}
                    onChange={() => onChange && onChange(index)}
                />
                <strong>{index + 1}</strong>
                {children}
            </label>
            <button onClick={() => removeTodo(item.id)}>
                <Icon icon="trash" width={24} height={24}/>
            </button>
        </li>
    )
};
