import {createContext} from "react";

interface IContext {
    removeTodo: (arg0: number | undefined) => void;
}

export const Context = createContext({} as IContext);