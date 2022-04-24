import React, { useState } from 'react';
import { TodoControls } from './components/TodoControls';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoType } from './types/todo.type';
import './styles.css';

function App() {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [text, setText] = useState<string>('');

    const onAddTodoHandler = () => {
        if (text.trim().length) {
            setTodos([...todos, {
                id: new Date().toISOString(), text, done: false
            }]);

            setText('');
        }
    }

    const onRemoveHandler = (id: number | string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onToggleTodoHandler = (id: number | string) => {
        setTodos(
            todos.map(todo => {
                if (todo.id !== id) return todo;

                return {
                    ...todo,
                    done: !todo.done
                }
            })
        )
    }

    return (<div className="App">
            <TodoControls
                text={text}
                onAddTodoHandler={onAddTodoHandler}
                setText={setText}
            />

            <TodoList>
                {todos.map(todo =>
                    <TodoItem
                        onRemoveHandler={onRemoveHandler}
                        onToggleTodoHandler={onToggleTodoHandler}
                        {...todo}
                    />)}
            </TodoList>
        </div>);
}

export default App;
