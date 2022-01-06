import s from './IndexPage.module.scss';
import {lazy, Suspense, useEffect, useState} from "react";
import {Context} from '../../../context/context';
import {EnumServiceItems} from "./IndexPage.props";
import {Spinner, TodoItem, TodoList, Container} from "../../components";
import {Modal} from "../../components/Modal/Modal";

const AddTodo = lazy(() => import('../../components/AddTodo/AddTodo').then(({AddTodo}) => ({default: AddTodo})))

export const IndexPage = (): JSX.Element => {
    const [state, setState] = useState<EnumServiceItems>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                setState(json);
                setLoading(false);
            })
    }, []);

    const toggleTodo = (id: number | undefined): void => {
        setState(state.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        }));
    };

    const removeTodo = (id: number | undefined): void =>
        setState(state.filter(todo => todo.id !== id));

    const addTodo = (title: string): void =>
        setState([...state, {title, id: state.length ? state[state.length - 1].id + 1 : 0, completed: false}]);

    return (
        <Context.Provider value={{removeTodo}}>
            <section>
                <Container className={s.container}>
                    <h1>Todo List Typescript, React</h1>
                    <Modal/>
                    <Suspense fallback={<Spinner/>}>
                        <AddTodo onCreate={addTodo}/>
                    </Suspense>
                    <TodoList>
                        {
                            state.map((i, idx) =>
                                <TodoItem
                                    item={i}
                                    key={i.id}
                                    index={idx}
                                    onChange={toggleTodo}
                                >
                                    {i.title}
                                </TodoItem>
                            )
                        }
                    </TodoList>
                    {!state.length && !loading && <b>No Todos</b>}
                    {loading && <Spinner/>}
                </Container>
            </section>
        </Context.Provider>
    )
};