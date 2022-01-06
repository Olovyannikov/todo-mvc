import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AddTodoProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onCreate: Function;
}