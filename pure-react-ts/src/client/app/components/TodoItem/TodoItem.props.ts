import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TodoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    item?: any;
    index: number;
    onChange?: any;
    children?: ReactNode;
}