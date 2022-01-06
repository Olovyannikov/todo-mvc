import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    children?: ReactNode;
}