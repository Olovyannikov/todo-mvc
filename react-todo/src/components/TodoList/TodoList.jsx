import TodoListItem from "../TodoListItem/TodoListItem";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import s from './TodoList.module.scss';

const TodoList = ({items, onItemDelete, onItemDone}) => {
    const elements = items.map((item) => {
        return (
            <ListGroupItem as={'li'} key={item.id}>
                <TodoListItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    onItemDelete={onItemDelete}
                    onItemDone={onItemDone}
                />
            </ListGroupItem>
        )
    });

    return (
            <ListGroup as={"ul"} className={s.todoList}>
                {elements}
            </ListGroup>
    );
}

export default TodoList;