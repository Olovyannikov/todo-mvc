import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { getTodos } from './store/models/todos/selectors';
import { addTodo } from './store/models/todos';
import { TodoControls } from './components/TodoControls';
import { TodoItem, TodoItemProps } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import './styles.css';

function App() {
    const todos = useSelector(getTodos);
    const dispatch = useTypedDispatch();
    const [text, setText] = useState<string>('');

    console.log(todos);

    const addTask = () => {
        dispatch(addTodo({ text }));
        setText('');
    };

    return (
        <div className="App">
            <TodoControls
                text={text}
                onAddTodoHandler={addTask}
                setText={setText}
            />

            <TodoList>
                {todos.map((todo: TodoItemProps) =>
                    <TodoItem key={todo.id} {...todo}/>)}
            </TodoList>
        </div>
    );
}

export default App;
