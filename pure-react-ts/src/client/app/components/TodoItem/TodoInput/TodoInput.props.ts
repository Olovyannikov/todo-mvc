import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TodoInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    index?: number | undefined;
}