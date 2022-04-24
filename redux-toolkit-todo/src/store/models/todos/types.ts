export interface TodoState {
    todos: {
        id: string | number;
        text: string;
        done: boolean;
    }[];
}