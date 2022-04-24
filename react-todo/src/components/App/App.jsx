import {useState} from "react";
import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import styled from 'styled-components';

const TodoAppBlock = styled.section`
  margin: 2rem auto 0 auto;
  max-width: 800px;
`;

const TopPanel = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: Math.floor(Math.random() * 100)
    };
};

const App = ({items, placeholder}) => {
    const [todos, setTodos] = useState(items);
    const [done, setDone] = useState();

    const onItemAdd = (label) => setTodos([...todos, createTodoItem(label)]);
    const onItemDelete = (id) => setTodos(todos.filter(item => item.id !== id));
    const onItemDone = (id) => todos.map(item => item.id === id && ({...item, done: true}));

    return (
        <TodoAppBlock>
            <AppHeader
                progress={todos.filter(item => item.done === false).length}
                done={todos.filter(item => item.done === true).length}
            />
            <TopPanel>
                <SearchPanel placeholder={placeholder}/>
                <ItemStatusFilter/>
            </TopPanel>
            <TodoList onItemDelete={onItemDelete} onItemDone={onItemDone} items={todos}/>

            <ItemAddForm onItemAdded={onItemAdd}/>
        </TodoAppBlock>
    );
}

export default App;