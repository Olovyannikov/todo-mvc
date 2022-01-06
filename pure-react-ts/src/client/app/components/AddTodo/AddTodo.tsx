import cn from "classnames";
import {SyntheticEvent} from "react";
import s from './AddTodo.module.scss';
import {AddTodoProps} from "./AddTodo.props";
import {useInput} from "../../../hooks/useInput";

export const AddTodo = ({onCreate, className, ...props}: AddTodoProps): JSX.Element => {
    const input = useInput('');

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <input
                type="text"
                className={cn(className)}
                {...input.bind}
                {...props}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}