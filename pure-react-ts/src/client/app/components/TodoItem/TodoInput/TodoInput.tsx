import {TodoInputProps} from "./TodoInput.props";

export const TodoInput = ({index, ...props}: TodoInputProps): JSX.Element => {
    return (
        <input type="checkbox" {...props}/>
    )
}