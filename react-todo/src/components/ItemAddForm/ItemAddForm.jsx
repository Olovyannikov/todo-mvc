import {Button, FormControl} from "react-bootstrap";
import styled from "styled-components";
import {useState} from "react";

const AddItemBlock = styled.div`
  margin-top: 20px;
`;

const ItemAddForm = ({onItemAdded}) => {
    const [value, setValue] = useState('');

    const inputStyle = {
        marginBottom: '10px'
    }

    return (
        <AddItemBlock>
            <FormControl
                style={inputStyle}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={'placeholder'}/>
            <Button
                onClick={() => {
                    onItemAdded(value);
                    setValue('');
                }}
                variant={"outline-secondary"}>Add Item</Button>
        </AddItemBlock>
    )
}

export default ItemAddForm;