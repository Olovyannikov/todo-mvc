import {useState} from "react";
import s from './Modal.module.scss';
import {ModalProps} from "./Modal.props";

export const Modal = ({}: ModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} type="button">Open Modal</button>
            {isOpen &&
                <div className={s.modal}>
                    <div className={s.body}>
                        <h2>Modal Title</h2>
                        <p>Modal content</p>
                        <button onClick={() => setIsOpen(!isOpen)} className={s.close} type="button" aria-label="Close Modal"/>
                    </div>
                </div>
            }
        </>
    )
}