import todos from './todos';

export interface RootModel {
    todos: typeof todos
}

export const models: RootModel = {todos}