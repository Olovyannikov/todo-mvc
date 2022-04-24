import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, ButtonGroup} from "react-bootstrap";
import {faExclamation, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import s from './TodoListItem.module.scss';
import {useState} from "react";

const TodoListItem = ({id, label, onItemDelete, onItemDone}) => {
    const [done, setDone] = useState(false);

    return (
        <span
            className={s.todoListItem}>
            <span
                onClick={() => {
                    onItemDone(id);
                    if (onItemDone(id)) {
                        setDone(!done);
                    }
                }}
                className={`${done && s.done}`}
            >
                {label}
            </span>
            <ButtonGroup>
                <Button
                    type={'button'}
                    variant={'outline-danger'}
                    size={'sm'}
                    onClick={() => onItemDelete(id)}
                >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>
                <Button
                    type={'button'}
                    variant={"outline-success"}
                    size={'sm'}
                >
                    <FontAwesomeIcon icon={faExclamation}/>
                </Button>
            </ButtonGroup>
        </span>
    )
}

export default TodoListItem;

